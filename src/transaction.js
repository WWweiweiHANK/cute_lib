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
  RETURN_DECISION: { CHARGE: "RETURN_BOOK_HELD", WAIVE: "RETURN_BOOK_HELD" },
  RETURN_ACCEPTED: { RESPOND: "RETURN_CUSTOMER_RESPONSE" },
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
    bookInstanceId,
    damageProfile = [],
    existingDamageBeforeLoan = [],
  }) {
    this.type = type;
    this.bookId = bookId;
    this.bookInstanceId = bookInstanceId;
    this.damageDecisions = [];
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
    if (["CHARGE", "WAIVE"].includes(event)) {
      const damage = this.damageProfile.find(
        (d) => d.id === this.selectedDamageId,
      );
      const responsible =
        damage.causedDuringLoan ??
        !this.existingDamageBeforeLoan.includes(damage.id);
      const decision = event.toLowerCase();
      const isCorrect = (decision === "charge") === responsible;
      const item = {
        damageId: damage.id,
        decision,
        isCorrect,
        reason: isCorrect
          ? null
          : responsible
            ? "missed_new_damage"
            : "charged_existing_damage",
      };
      const previous = this.damageDecisions.findIndex(
        (d) => d.damageId === damage.id,
      );
      if (previous < 0) this.damageDecisions.push(item);
      else this.damageDecisions[previous] = item;
    }
    if (["BORROW", "REJECT", "ACCEPT"].includes(event))
      this.decision = event.toLowerCase();
    if (event === "COMPLETE") {
      if (this.type === "return") {
        const present = this.damageProfile.filter((d) => d.visible);
        const responsible = present.some(
          (d) =>
            d.causedDuringLoan ?? !this.existingDamageBeforeLoan.includes(d.id),
        );
        const errors = present.flatMap((d) => {
          const liable =
            d.causedDuringLoan ?? !this.existingDamageBeforeLoan.includes(d.id);
          const charged =
            this.damageDecisions.find((item) => item.damageId === d.id)
              ?.decision === "charge";
          return liable === charged
            ? []
            : [
                {
                  damageId: d.id,
                  reason: liable
                    ? "missed_new_damage"
                    : "charged_existing_damage",
                },
              ];
        });
        this.record = Object.freeze({
          transactionType: "return",
          customerId: this.customerId,
          bookId: this.bookId,
          bookInstanceId: this.bookInstanceId,
          actualDamagePresent: present.length > 0,
          actualDamageResponsibility: responsible,
          selectedDamageId: this.selectedDamageId,
          finalDecision: this.decision,
          damageDecisions: structuredClone(this.damageDecisions),
          isCorrect: errors.length === 0,
          reason: errors[0]?.reason ?? null,
          errors,
          timestamp: new Date().toISOString(),
        });
      } else
        this.record = Object.freeze({
          transactionType: "borrow",
          customerId: this.customerId,
          bookId: this.bookId,
          bookInstanceId: this.bookInstanceId,
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
