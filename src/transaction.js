const transitions = {
  WAITING: { START: "CUSTOMER_ENTERING" },
  CUSTOMER_ENTERING: { ARRIVE: "CUSTOMER_TALKING" },
  CUSTOMER_TALKING: { PLACE_ITEMS: "ITEMS_PLACED" },
  ITEMS_PLACED: { PICK_ID: "ID_INSPECT", PICK_BOOK: "BOOK_INSPECT" },
  ID_INSPECT: { EXIT_INSPECT: "ID_HELD" },
  ID_HELD: { PUT_ID: "ITEMS_PLACED", INSPECT_AGAIN: "ID_INSPECT" },
  BOOK_INSPECT: { EXIT_INSPECT: "BOOK_HELD" },
  BOOK_HELD: {
    PUT_BOOK: "ITEMS_PLACED",
    INSPECT_AGAIN: "BOOK_INSPECT",
    BORROW: "BORROW_COMMIT",
    REJECT: "REJECT_COMMIT",
  },
  BORROW_COMMIT: { RESPOND: "CUSTOMER_RESPONSE" },
  REJECT_COMMIT: { RESPOND: "CUSTOMER_RESPONSE" },
  CUSTOMER_RESPONSE: { LEAVE: "CUSTOMER_LEAVING" },
  CUSTOMER_LEAVING: { COMPLETE: "TRANSACTION_COMPLETE" },
  TRANSACTION_COMPLETE: {},
};

/** Owns the transaction rules; animation and rendering cannot override a decision. */
export class Transaction {
  constructor({ customerId, actualIdentityMatch }) {
    this.customerId = customerId;
    this.actualIdentityMatch = actualIdentityMatch;
    this.state = "WAITING";
    this.checklist = null;
    this.decision = null;
    this.record = null;
  }
  dispatch(event) {
    if (
      this.state === "ID_INSPECT" &&
      ["CHECK_PASS", "CHECK_FAIL"].includes(event)
    ) {
      const value = event === "CHECK_PASS" ? "PASS" : "FAIL";
      this.checklist = this.checklist === value ? null : value;
      return true;
    }
    const next = transitions[this.state]?.[event];
    if (!next) return false;
    this.state = next;
    if (event === "BORROW" || event === "REJECT")
      this.decision = event.toLowerCase();
    if (event === "COMPLETE") {
      this.record = Object.freeze({
        customerId: this.customerId,
        actualIdentityMatch: this.actualIdentityMatch,
        playerChecklistIdentity: this.checklist,
        finalDecision: this.decision,
        isCorrect: (this.decision === "borrow") === this.actualIdentityMatch,
        timestamp: new Date().toISOString(),
      });
    }
    return true;
  }
}
