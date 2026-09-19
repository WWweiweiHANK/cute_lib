import { Transaction } from "./transaction.js";
import { returnCases } from "./return-cases.js";

const { damageProfile: unusedA, ...lighthouse } = returnCases.A.book;
const { damageProfile: unusedB, ...rain } = returnCases.B.book;
export const bookDefinitions = { [lighthouse.id]: lighthouse, [rain.id]: rain };
const fold = {
  id: "fold_corner_01",
  type: "corner_fold",
  location: "front_cover_bottom_right",
  page: 0,
  uvRect: [0.78, 0.82, 0.2, 0.16],
  active: true,
  createdAt: "BEFORE_GAME",
};
const coffee = {
  id: "coffee_stain_01",
  type: "stain",
  location: "page_3",
  page: 3,
  uvRect: [0.56, 0.36, 0.29, 0.23],
  active: true,
  createdAt: "CURRENT_LOAN",
};

export class BookInstance {
  constructor(instanceId, definitionId, damages = []) {
    this.instanceId = instanceId;
    this.definitionId = definitionId;
    this.status = "IN_LIBRARY";
    this.holderCustomerId = null;
    this.damages = structuredClone(damages);
    this.existingDamageBeforeLoan = [];
  }
  // Explicit visual projection: provenance and loan history never enter the renderer.
  visualDamages() {
    return this.damages
      .filter((d) => d.active)
      .map(({ id, type, location, page, uvRect }) => ({
        id,
        type,
        location,
        page,
        uvRect: [...uvRect],
        visible: true,
      }));
  }
}

export const daySequence = [
  {
    type: "borrow",
    customerId: "lin_zhou",
    bookInstanceId: "book_lighthouse_001",
    delayBefore: 0,
    greeting: "晚上好，我想借这本。",
  },
  {
    type: "borrow",
    customerId: "zhou_ning",
    bookInstanceId: "book_city_rain_001",
    delayBefore: 5,
    greeting: "晚上好，我想借这本书。",
  },
  {
    type: "return",
    customerId: "lin_zhou",
    bookInstanceId: "book_lighthouse_001",
    delayBefore: 10,
    greeting: "你好，我来还刚才那本书。",
    beforeArrival: { addDamage: [coffee] },
    damageReplies: {
      fold_corner_01: ["这个吗？", "我借的时候就已经这样了。"],
      coffee_stain_01: ["啊……", "喝东西的时候不小心碰到了。"],
    },
  },
];

export class CustomerSequenceController {
  constructor() {
    this.books = new Map([
      [
        "book_lighthouse_001",
        new BookInstance("book_lighthouse_001", lighthouse.id, [fold]),
      ],
      ["book_city_rain_001", new BookInstance("book_city_rain_001", rain.id)],
    ]);
    this.index = 0;
    this.records = [];
    this.active = null;
  }
  begin() {
    if (this.active) return this.active;
    const step = daySequence[this.index];
    if (!step) return null;
    const book = this.books.get(step.bookInstanceId);
    // A refused loan cannot create a fictitious return later in the sequence.
    if (
      step.type === "return" &&
      (book.status !== "ON_LOAN" || book.holderCustomerId !== step.customerId)
    ) {
      this.index++;
      return this.begin();
    }
    for (const damage of step.beforeArrival?.addDamage || []) {
      if (!book.damages.some((d) => d.id === damage.id))
        book.damages.push(structuredClone(damage));
    }
    if (step.type === "return") book.status = "IN_RETURN_TRANSACTION";
    this.active = {
      step,
      book,
      definition: bookDefinitions[book.definitionId],
      transaction: new Transaction({
        type: step.type,
        customerId: step.customerId,
        bookId: book.definitionId,
        bookInstanceId: book.instanceId,
        actualIdentityMatch: true,
        damageProfile: book.visualDamages(),
        existingDamageBeforeLoan: [...book.existingDamageBeforeLoan],
      }),
    };
    return this.active;
  }
  complete(transaction) {
    if (
      !this.active ||
      transaction !== this.active.transaction ||
      !transaction.record
    )
      return false;
    const { book, step } = this.active;
    if (step.type === "borrow" && transaction.decision === "borrow") {
      book.existingDamageBeforeLoan = book.damages
        .filter((d) => d.active)
        .map((d) => d.id);
      book.status = "ON_LOAN";
      book.holderCustomerId = step.customerId;
    } else {
      book.status = "IN_LIBRARY";
      book.holderCustomerId = null;
    }
    this.index++;
    this.records.push(transaction.record);
    this.active = null;
    return true;
  }
}
