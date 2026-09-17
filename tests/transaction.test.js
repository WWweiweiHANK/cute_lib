import test from "node:test";
import assert from "node:assert/strict";
import { Transaction } from "../src/transaction.js";

function ready(match = true) {
  const t = new Transaction({
    customerId: "reader-01",
    actualIdentityMatch: match,
  });
  for (const event of ["START", "ARRIVE", "PLACE_ITEMS"]) t.dispatch(event);
  return t;
}
function inspected(match = true) {
  const t = ready(match);
  for (const event of [
    "PICK_ID",
    "EXIT_INSPECT",
    "PUT_ID",
    "PICK_BOOK",
    "EXIT_INSPECT",
  ])
    t.dispatch(event);
  return t;
}

test("identity checklist begins empty and only the player can toggle it", () => {
  const t = ready();
  assert.equal(t.checklist, null);
  assert.equal(t.dispatch("CHECK_PASS"), false);
  t.dispatch("PICK_ID");
  t.dispatch("CHECK_PASS");
  assert.equal(t.checklist, "PASS");
  t.dispatch("CHECK_PASS");
  assert.equal(t.checklist, null);
  t.dispatch("CHECK_FAIL");
  t.dispatch("CHECK_PASS");
  assert.equal(t.checklist, "PASS");
});
test("exiting inspection retains the held object and permits placing it", () => {
  const t = ready();
  t.dispatch("PICK_ID");
  t.dispatch("EXIT_INSPECT");
  assert.equal(t.state, "ID_HELD");
  assert.equal(t.dispatch("PICK_BOOK"), false);
  t.dispatch("PUT_ID");
  t.dispatch("PICK_BOOK");
  t.dispatch("EXIT_INSPECT");
  assert.equal(t.state, "BOOK_HELD");
  assert.equal(t.dispatch("BORROW"), true);
});
test("borrow machine accepts an incorrect identity and records the mistake privately", () => {
  const t = inspected(false);
  assert.equal(t.dispatch("BORROW"), true);
  for (const event of ["RESPOND", "LEAVE", "COMPLETE"]) t.dispatch(event);
  assert.equal(t.state, "TRANSACTION_COMPLETE");
  assert.equal(t.record.finalDecision, "borrow");
  assert.equal(t.record.actualIdentityMatch, false);
  assert.equal(t.record.playerChecklistIdentity, null);
  assert.equal(t.record.isCorrect, false);
  assert.ok(Number.isFinite(Date.parse(t.record.timestamp)));
});
test("a committed decision cannot be duplicated or changed", () => {
  const t = inspected();
  assert.equal(t.dispatch("BORROW"), true);
  assert.equal(t.dispatch("REJECT"), false);
  assert.equal(t.dispatch("BORROW"), false);
  for (const event of ["RESPOND", "LEAVE", "COMPLETE"]) t.dispatch(event);
  const record = t.record;
  for (const event of ["COMPLETE", "PICK_ID", "PICK_BOOK", "REJECT"])
    assert.equal(t.dispatch(event), false);
  assert.equal(t.record, record);
});
test("reject is correct only for a mismatched identity", () => {
  for (const [match, correct] of [
    [true, false],
    [false, true],
  ]) {
    const t = inspected(match);
    t.dispatch("REJECT");
    for (const event of ["RESPOND", "LEAVE", "COMPLETE"]) t.dispatch(event);
    assert.equal(t.record.finalDecision, "reject");
    assert.equal(t.record.isCorrect, correct);
  }
});
test("book can be returned and inspected again without committing", () => {
  const t = inspected();
  assert.equal(t.dispatch("INSPECT_AGAIN"), true);
  assert.equal(t.state, "BOOK_INSPECT");
  assert.equal(t.dispatch("REJECT"), false);
  t.dispatch("EXIT_INSPECT");
  assert.equal(t.dispatch("PUT_BOOK"), true);
  assert.equal(t.dispatch("PICK_ID"), true);
});
