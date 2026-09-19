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

const returnTransitions = {
  RETURN_WAITING: { START: "RETURN_CUSTOMER_ENTERING" },
  RETURN_CUSTOMER_ENTERING: { ARRIVE: "RETURN_CUSTOMER_TALKING" },
  RETURN_CUSTOMER_TALKING: { PLACE_ITEMS: "RETURN_BOOK_PLACED" },
  RETURN_BOOK_PLACED: { PICK_BOOK: "RETURN_BOOK_HELD" },
  RETURN_BOOK_HELD: {
    PUT_BOOK: "RETURN_BOOK_PLACED",
    INSPECT_AGAIN: "RETURN_BOOK_INSPECT",
    ACCEPT: "RETURN_ACCEPTED",
  },
  RETURN_BOOK_INSPECT: {
    EXIT_INSPECT: "RETURN_BOOK_HELD",
    SELECT_DAMAGE: "RETURN_DAMAGE_SELECTED",
  },
  RETURN_DAMAGE_SELECTED: { BEGIN_DIALOGUE: "RETURN_DAMAGE_DIALOGUE" },
  RETURN_DAMAGE_DIALOGUE: { SHOW_DECISION: "RETURN_DECISION" },
  RETURN_DECISION: { CHARGE: "RETURN_CHARGED", WAIVE: "RETURN_WAIVED" },
  RETURN_ACCEPTED: { RESPOND: "RETURN_CUSTOMER_RESPONSE" },
  RETURN_CHARGED: { RESPOND: "RETURN_CUSTOMER_RESPONSE" },
  RETURN_WAIVED: { RESPOND: "RETURN_CUSTOMER_RESPONSE" },
  RETURN_CUSTOMER_RESPONSE: { LEAVE: "RETURN_CUSTOMER_LEAVING" },
  RETURN_CUSTOMER_LEAVING: { COMPLETE: "RETURN_COMPLETE" },
  RETURN_COMPLETE: {},
};

/** Owns the transaction rules; animation and rendering cannot override a decision. */
export class Transaction {
  constructor({
    type = "borrow",
    customerId,
    actualIdentityMatch,
    bookId,
    damageProfile = [],
    existingDamageBeforeLoan = [],
  }) {
    this.type = type;
    this.bookId = bookId;
    this.damageProfile = damageProfile;
    this.existingDamageBeforeLoan = existingDamageBeforeLoan;
    this.selectedDamageId = null;
    this.customerId = customerId;
    this.actualIdentityMatch = actualIdentityMatch;
    this.state = type === "return" ? "RETURN_WAITING" : "WAITING";
    this.checklist = null;
    this.cardReturned = false;
    this.decision = null;
    this.record = null;
  }
  // Shared physical actions use the same phase while transaction states stay distinct.
  get phase() {
    if (this.type !== "return") return this.state;
    if (this.state === "RETURN_BOOK_PLACED") return "ITEMS_PLACED";
    if (this.state === "RETURN_COMPLETE") return "TRANSACTION_COMPLETE";
    return this.state.slice(7);
  }
  dispatch(event, damageId) {
    if (event === "PICK_ID" && this.cardReturned) return false;
    const next = (this.type === "return" ? returnTransitions : transitions)[
      this.state
    ]?.[event];
    if (!next) return false;
    if (event === "SELECT_DAMAGE") {
      if (!this.damageProfile.some((d) => d.id === damageId && d.visible))
        return false;
      this.selectedDamageId = damageId;
    }
    this.state = next;
    if (event === "RETURN_ID") this.cardReturned = true;
    if (["BORROW", "REJECT", "ACCEPT", "CHARGE", "WAIVE"].includes(event))
      this.decision = event.toLowerCase();
    if (event === "COMPLETE") {
      if (this.type === "return") {
        const present = this.damageProfile.filter((d) => d.visible);
        const responsible = present.some(
          (d) =>
            d.causedDuringLoan ?? !this.existingDamageBeforeLoan.includes(d.id),
        );
        const selected = present.find((d) => d.id === this.selectedDamageId);
        const selectedResponsible =
          selected &&
          (selected.causedDuringLoan ??
            !this.existingDamageBeforeLoan.includes(selected.id));
        this.record = Object.freeze({
          transactionType: "return",
          customerId: this.customerId,
          bookId: this.bookId,
          actualDamagePresent: present.length > 0,
          actualDamageResponsibility: responsible,
          selectedDamageId: this.selectedDamageId,
          finalDecision: this.decision,
          isCorrect:
            this.decision === "charge"
              ? Boolean(selectedResponsible)
              : !responsible,
          timestamp: new Date().toISOString(),
        });
      } else
        this.record = Object.freeze({
          transactionType: "borrow",
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
