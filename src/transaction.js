const transitions = {
  WAITING: { START: "CUSTOMER_ENTERING" },
  CUSTOMER_ENTERING: { ARRIVE: "CUSTOMER_TALKING" },
  CUSTOMER_TALKING: { PLACE_ITEMS: "ITEMS_PLACED" },
  ITEMS_PLACED: { PICK_ID: "ID_HELD", PICK_BOOK: "BOOK_HELD" },
  ID_HELD: { RETURN_ID: "ITEMS_PLACED" },
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
    this.cardReturned = false;
    this.decision = null;
    this.record = null;
  }
  dispatch(event) {
    if (event === "PICK_ID" && this.cardReturned) return false;
    const next = transitions[this.state]?.[event];
    if (!next) return false;
    this.state = next;
    if (event === "RETURN_ID") this.cardReturned = true;
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
