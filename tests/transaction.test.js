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
  for (const event of ["PICK_ID", "RETURN_ID", "PICK_BOOK"]) t.dispatch(event);
  return t;
}

test("card is readable in hand and returning it ends the card stage", () => {
  const t = ready();
  t.dispatch("PICK_ID");
  assert.equal(t.state, "ID_HELD");
  assert.equal(t.dispatch("INSPECT_AGAIN"), false);
  assert.equal(t.dispatch("PUT_ID"), false);
  assert.equal(t.dispatch("RETURN_ID"), true);
  assert.equal(t.cardReturned, true);
  assert.equal(t.dispatch("PICK_ID"), false);
});
test("exiting inspection retains the held object and permits placing it", () => {
  const t = ready();
  t.dispatch("PICK_ID");
  assert.equal(t.state, "ID_HELD");
  assert.equal(t.dispatch("PICK_BOOK"), false);
  t.dispatch("RETURN_ID");
  t.dispatch("PICK_BOOK");
  assert.equal(t.state, "BOOK_HELD");
  t.dispatch("INSPECT_AGAIN");
  assert.equal(t.state, "BOOK_INSPECT");
  assert.equal(t.dispatch("BORROW"), false);
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
  assert.equal(t.dispatch("PICK_BOOK"), true);
  assert.equal(t.state, "BOOK_HELD");
});

test("returns record charge, waive and missed damage without blocking acceptance", () => {
  for (const [decision, damaged, correct] of [
    ["CHARGE", true, true],
    ["WAIVE", true, false],
    ["ACCEPT", true, false],
    ["ACCEPT", false, true],
  ]) {
    const t = new Transaction({
      type: "return",
      customerId: "return-01",
      bookId: "lighthouse",
      damageProfile: damaged
        ? [{ id: "scratch", visible: true, causedDuringLoan: true }]
        : [],
    });
    for (const event of ["START", "ARRIVE", "PLACE_ITEMS", "PICK_BOOK"])
      assert.equal(t.dispatch(event), true);
    assert.equal(t.state, "RETURN_BOOK_HELD");
    assert.equal(t.dispatch("BORROW"), false);
    if (decision !== "ACCEPT") {
      t.dispatch("INSPECT_AGAIN");
      assert.equal(t.dispatch("SELECT_DAMAGE", "invented"), false);
      assert.equal(t.dispatch("SELECT_DAMAGE", "scratch"), true);
      t.dispatch("BEGIN_DIALOGUE");
      t.dispatch("SHOW_DECISION");
    }
    assert.equal(t.dispatch(decision), true);
    assert.equal(t.dispatch(decision), false);
    if (decision !== "ACCEPT") {
      assert.equal(t.state, "RETURN_BOOK_HELD");
      assert.equal(t.damageDecisions[0].decision, decision.toLowerCase());
      t.dispatch("ACCEPT");
    }
    t.dispatch("RESPOND");
    t.dispatch("LEAVE");
    assert.equal(t.record, null);
    t.dispatch("COMPLETE");
    assert.equal(t.state, "RETURN_COMPLETE");
    assert.equal(t.record.transactionType, "return");
    assert.equal(t.record.finalDecision, "accept");
    assert.equal(t.record.actualDamagePresent, damaged);
    assert.equal(t.record.actualDamageResponsibility, damaged);
    assert.equal(t.record.isCorrect, correct);
    assert.equal(t.record.bookId, "lighthouse");
    const record = t.record;
    assert.equal(t.dispatch("COMPLETE"), false);
    assert.equal(t.record, record);
  }
});

test("old damage remains inspectable but does not justify charging; clean books cannot invent damage", () => {
  const t = new Transaction({
    type: "return",
    customerId: "old",
    bookId: "rain",
    damageProfile: [{ id: "stain", visible: true }],
    existingDamageBeforeLoan: ["stain"],
  });
  for (const e of [
    "START",
    "ARRIVE",
    "PLACE_ITEMS",
    "PICK_BOOK",
    "INSPECT_AGAIN",
  ])
    t.dispatch(e);
  assert.equal(t.dispatch("SELECT_DAMAGE", "stain"), true);
  for (const e of [
    "BEGIN_DIALOGUE",
    "SHOW_DECISION",
    "CHARGE",
    "ACCEPT",
    "RESPOND",
    "LEAVE",
    "COMPLETE",
  ])
    t.dispatch(e);
  assert.equal(t.record.actualDamagePresent, true);
  assert.equal(t.record.actualDamageResponsibility, false);
  assert.equal(t.record.isCorrect, false);
  const clean = new Transaction({
    type: "return",
    customerId: "clean",
    bookId: "rain",
    damageProfile: [],
  });
  for (const e of [
    "START",
    "ARRIVE",
    "PLACE_ITEMS",
    "PICK_BOOK",
    "INSPECT_AGAIN",
  ])
    clean.dispatch(e);
  assert.equal(clean.dispatch("SELECT_DAMAGE", "scratch"), false);
  assert.equal(clean.dispatch("CHARGE"), false);
  const mixed = new Transaction({
    type: "return",
    customerId: "mixed",
    bookId: "rain",
    damageProfile: [
      { id: "old", visible: true },
      { id: "new", visible: true },
    ],
    existingDamageBeforeLoan: ["old"],
  });
  for (const e of [
    "START",
    "ARRIVE",
    "PLACE_ITEMS",
    "PICK_BOOK",
    "INSPECT_AGAIN",
  ])
    mixed.dispatch(e);
  mixed.dispatch("SELECT_DAMAGE", "old");
  for (const e of [
    "BEGIN_DIALOGUE",
    "SHOW_DECISION",
    "CHARGE",
    "ACCEPT",
    "RESPOND",
    "LEAVE",
    "COMPLETE",
  ])
    mixed.dispatch(e);
  assert.equal(mixed.record.actualDamageResponsibility, true);
  assert.equal(
    mixed.record.isCorrect,
    false,
    "charging the old mark is wrong even if another mark is new",
  );
});

test("memory sequence preserves the copy, loan baseline and per-damage decisions", async () => {
  const { CustomerSequenceController } = await import("../src/memory-loop.js");
  for (const [decisions, correct, reason] of [
    [
      [
        ["fold_corner_01", "waive"],
        ["coffee_stain_01", "charge"],
      ],
      true,
      null,
    ],
    [
      [
        ["fold_corner_01", "charge"],
        ["coffee_stain_01", "charge"],
      ],
      false,
      "charged_existing_damage",
    ],
    [[["coffee_stain_01", "waive"]], false, "missed_new_damage"],
    [[], false, "missed_new_damage"],
  ]) {
    const sequence = new CustomerSequenceController();
    const first = sequence.begin();
    const copy = first.book;
    assert.equal(copy.instanceId, "book_lighthouse_001");
    assert.deepEqual(
      copy.damages.map((d) => d.id),
      ["fold_corner_01"],
    );
    assert.equal(sequence.complete(first.transaction), false);
    for (const event of [
      "START",
      "ARRIVE",
      "PLACE_ITEMS",
      "PICK_BOOK",
      "BORROW",
      "RESPOND",
      "LEAVE",
      "COMPLETE",
    ])
      first.transaction.dispatch(event);
    assert.equal(sequence.complete(first.transaction), true);
    assert.equal(copy.status, "ON_LOAN");
    assert.equal(copy.holderCustomerId, "lin_zhou");
    assert.deepEqual(copy.existingDamageBeforeLoan, ["fold_corner_01"]);
    const second = sequence.begin();
    assert.equal(second.step.delayBefore, 5);
    for (const event of [
      "START",
      "ARRIVE",
      "PLACE_ITEMS",
      "PICK_BOOK",
      "BORROW",
      "RESPOND",
      "LEAVE",
      "COMPLETE",
    ])
      second.transaction.dispatch(event);
    sequence.complete(second.transaction);
    const third = sequence.begin();
    assert.strictEqual(third.book, copy);
    assert.equal(third.step.delayBefore, 10);
    assert.equal(copy.status, "IN_RETURN_TRANSACTION");
    assert.deepEqual(
      copy.damages.map((d) => d.id),
      ["fold_corner_01", "coffee_stain_01"],
    );
    assert.strictEqual(sequence.begin(), third, "begin must not mutate twice");
    const t = third.transaction;
    for (const event of ["START", "ARRIVE", "PLACE_ITEMS", "PICK_BOOK"])
      t.dispatch(event);
    for (const [id, decision] of decisions) {
      t.dispatch("INSPECT_AGAIN");
      t.dispatch("SELECT_DAMAGE", id);
      t.dispatch("BEGIN_DIALOGUE");
      t.dispatch("SHOW_DECISION");
      assert.equal(t.dispatch(decision.toUpperCase()), true);
      assert.equal(t.state, "RETURN_BOOK_HELD");
      assert.equal(t.record, null);
    }
    for (const event of ["ACCEPT", "RESPOND", "LEAVE", "COMPLETE"])
      t.dispatch(event);
    assert.equal(t.record.isCorrect, correct);
    assert.equal(t.record.reason, reason);
    assert.equal(t.record.bookInstanceId, copy.instanceId);
    assert.equal(sequence.complete(t), true);
    assert.equal(copy.status, "IN_LIBRARY");
    assert.equal(copy.holderCustomerId, null);
    assert.equal(copy.damages.length, 2);
    assert.equal(sequence.begin(), null);
    assert.equal(sequence.complete(t), false);
    // Replay the first scripted loan against the same session inventory.
    sequence.index = 0;
    const later = sequence.begin();
    assert.strictEqual(later.book, copy);
    for (const e of [
      "START",
      "ARRIVE",
      "PLACE_ITEMS",
      "PICK_BOOK",
      "BORROW",
      "RESPOND",
      "LEAVE",
      "COMPLETE",
    ])
      later.transaction.dispatch(e);
    sequence.complete(later.transaction);
    assert.deepEqual(copy.existingDamageBeforeLoan, [
      "fold_corner_01",
      "coffee_stain_01",
    ]);
  }
});

test("a refused loan cannot create a fictitious return or stain", async () => {
  const { CustomerSequenceController } = await import("../src/memory-loop.js");
  const sequence = new CustomerSequenceController();
  for (const decision of ["REJECT", "BORROW"]) {
    const { transaction } = sequence.begin();
    for (const e of [
      "START",
      "ARRIVE",
      "PLACE_ITEMS",
      "PICK_BOOK",
      decision,
      "RESPOND",
      "LEAVE",
      "COMPLETE",
    ])
      transaction.dispatch(e);
    sequence.complete(transaction);
  }
  assert.equal(sequence.begin(), null);
  assert.equal(sequence.records.length, 2);
  const book = sequence.books.get("book_lighthouse_001");
  assert.equal(book.status, "IN_LIBRARY");
  assert.equal(book.holderCustomerId, null);
  assert.deepEqual(
    book.damages.map((d) => d.id),
    ["fold_corner_01"],
  );
});

test("revisiting a damage replaces its decision and never adds a second charge", () => {
  const t = new Transaction({
    type: "return",
    customerId: "reader",
    bookId: "book",
    damageProfile: [{ id: "scratch", visible: true }],
  });
  for (const e of ["START", "ARRIVE", "PLACE_ITEMS", "PICK_BOOK"])
    t.dispatch(e);
  for (const decision of ["WAIVE", "CHARGE", "CHARGE"]) {
    t.dispatch("INSPECT_AGAIN");
    t.dispatch("SELECT_DAMAGE", "scratch");
    t.dispatch("BEGIN_DIALOGUE");
    t.dispatch("SHOW_DECISION");
    t.dispatch(decision);
  }
  assert.equal(t.damageDecisions.length, 1);
  assert.equal(t.damageDecisions[0].decision, "charge");
  for (const e of ["ACCEPT", "RESPOND", "LEAVE", "COMPLETE"]) t.dispatch(e);
  assert.equal(t.record.isCorrect, true);
});
