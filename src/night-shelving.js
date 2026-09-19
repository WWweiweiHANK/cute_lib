import { BookInstance, bookDefinitions } from './memory-loop.js';

export const shelfCategories = [
  { id: 'literature', label: ['LITERATURE', '文学'], position: [-4, 0, -2.6] },
  { id: 'history', label: ['HISTORY', '历史'], position: [4, 0, -2.8] },
  { id: 'nature', label: ['NATURE', '自然'], position: [-4.2, 0, .7] },
  { id: 'science', label: ['SCIENCE', '科普'], position: [4.4, 0, .4] },
];
export const shelvingDefinitions = [
  { ...bookDefinitions['distant-lighthouse'], category: 'literature', content: [
    '他离开家乡很多年，再回到海边时，灯塔仍在黄昏准时亮起。守灯人递给他一杯热茶，谁也没有先说话。',
    '风把信纸吹向窗边。他压住纸角，想起母亲曾说，海上的灯不问归期，只负责在天黑以后等着。',
    '船越走越远，故乡缩成一道细线。他终于明白，留在岸上的那些日子，也会陪着人一起远行。',
  ] },
  { id: 'before-rain-ends', title: '雨停之前', englishTitle: ['BEFORE THE', 'RAIN ENDS'], category: 'literature', art: 'rain', coverColor: '#40525d', content: [
    '她把伞靠在窗边，坐回熟悉的位置。街上的行人渐渐稀少，玻璃映着她的脸，也映着对面那扇亮灯的窗。',
    '那封信一直留在抽屉里。雨停之前，她又读了一遍开头，终于在空白的纸上写下第一句话。',
    '窗外有人收起了伞。她端着温热的杯子，想起很久以前，他们也是这样并排等过一场雨。',
  ] },
  { id: 'harbour-years', title: '港口年代', englishTitle: ['HARBOUR', 'YEARS'], category: 'history', art: 'port', coverColor: '#594433', content: [
    '十九世纪末，旧港扩建了第一座石砌码头。船运账册中的货物数量，记录着这座城市从渔村到商埠的变化。',
    '本章对照一九二三年的港区地图与海关档案，整理仓库、铁路和船坞的位置，复原当时码头的日常运作。',
    '工人留下的口述记录补充了报纸未曾提及的生活。潮汐时刻表、工资簿和家书，共同构成港口的历史。',
  ] },
  { id: 'old-city-archive', title: '旧城档案', englishTitle: ['OLD CITY', 'ARCHIVES'], category: 'history', art: 'city', coverColor: '#807660', content: [
    '这张测绘图完成于一九三一年。街巷的旧称标注在建筑轮廓旁，与今日路名对照，可以辨认城市扩张的方向。',
    '市政会议纪要记载了供水系统的修建经过。工程分为三期，先沿主街铺设，再逐步进入居民密集的支路。',
    '修复老建筑时，门牌、砖印与住户档案互相印证。它们让一栋普通房屋重新获得了准确的年代和姓名。',
  ] },
  { id: 'woodland-notes', title: '林间观察', englishTitle: ['WOODLAND', 'NOTES'], category: 'nature', art: 'plant', coverColor: '#324a38', content: [
    '蕨类常生长在阴湿的林下。翻看成熟叶片的背面，可以见到排列整齐的孢子囊群，它们并不是虫卵。',
    '清晨是观察林鸟的好时段。保持安静，先听鸣声，再辨认喙形与尾羽；记录时间、天气和树木所在的位置。',
    '落叶下的菌丝分解枯枝，让养分回到土壤。观察时轻轻拨开表层，结束后将落叶盖回，保留原来的湿度。',
  ] },
  { id: 'light-machines', title: '光与机械', englishTitle: ['LIGHT &', 'MACHINES'], category: 'science', art: 'gear', coverColor: '#3f505d', content: [
    '光通过凸透镜时会发生折射。将屏幕缓缓移到焦点附近，可以得到清晰的倒立像，这也是相机成像的基础。',
    '两只啮合齿轮的转速与齿数成反比。小齿轮带动大齿轮时，输出转速降低，而传递的转矩相应增大。',
    '测量杠杆两端的力臂，可以预测平衡的位置。支点不是力的来源，它改变的是施力的方向与所需的大小。',
  ] },
];
export const scatteredPositions = [
  [-2.94, .849, -2.42], [-2.68, .058, -2.13], [-1.46, .058, -2.05],
  [.85, .058, -3.45], [3.62, .058, -1.05], [1.95, .058, -.18],
];

export class NightShelvingController {
  books = new Map();
  slots = [];
  taskBookIds = [];
  heldBookId = null;
  result = null;
  constructor() {
    shelvingDefinitions.forEach((definition, i) => {
      const id = `shelving_${definition.id}`;
      this.taskBookIds.push(id);
      this.books.set(id, { ...new BookInstance(id, definition.id), category: definition.category,
        location: { type: 'scattered', position: scatteredPositions[i] } });
    });
    for (const shelf of shelfCategories) {
      const definition = shelvingDefinitions.find(d => d.category === shelf.id);
      for (let i = 0; i < 6; i++) {
        const slot = { slotId: `${shelf.id}_${i}`, shelfId: shelf.id, category: shelf.id,
          localPosition: [-.49 + (i % 3) * .49, i < 3 ? .73 : 1.57, .075],
          localRotation: [0, Math.PI / 2, 0], occupantBookId: null };
        if ([0, 2, 4].includes(i)) {
          const id = `shelf_${slot.slotId}`;
          slot.occupantBookId = id;
          this.books.set(id, { ...new BookInstance(id, definition.id), category: definition.category,
            location: { type: 'shelf', shelfId: shelf.id, slotId: slot.slotId } });
        }
        this.slots.push(slot);
      }
    }
  }
  pickup(bookId) {
    const book = this.books.get(bookId);
    if (!book || this.heldBookId) return false;
    const slot = this.slots.find(s => s.occupantBookId === bookId);
    if (slot) slot.occupantBookId = null;
    book.location = { type: 'held' };
    this.heldBookId = bookId;
    this.result = null;
    return true;
  }
  removeFromShelf(bookId) {
    return this.getBookLocation(bookId)?.type === 'shelf' && this.pickup(bookId);
  }
  place(bookId, shelfId, slotId) {
    const slot = this.slots.find(s => s.slotId === slotId && s.shelfId === shelfId);
    if (!slot || slot.occupantBookId || bookId !== this.heldBookId || !this.books.has(bookId)) return false;
    slot.occupantBookId = bookId;
    this.books.get(bookId).location = { type: 'shelf', shelfId, slotId };
    this.heldBookId = null;
    if (this.isTaskComplete()) {
      const finalPlacements = this.getFinalLayout();
      const correctPlacementCount = finalPlacements.filter(p => p.isCorrect).length;
      this.result = { taskBookIds: [...this.taskBookIds], finalPlacements, correctPlacementCount,
        wrongPlacementCount: finalPlacements.length - correctPlacementCount, completedAt: new Date().toISOString() };
    }
    return true;
  }
  getBookLocation(bookId) { return this.books.get(bookId)?.location; }
  getPendingBooks() { return this.taskBookIds.filter(id => this.getBookLocation(id).type !== 'shelf'); }
  isTaskComplete() { return !this.heldBookId && !this.getPendingBooks().length; }
  getFinalLayout() {
    return [...this.books.keys()].flatMap(bookId => {
      const book = this.books.get(bookId), location = book.location;
      if (location.type !== 'shelf') return [];
      const slot = this.slots.find(s => s.slotId === location.slotId);
      return [{ bookId, actualCategory: book.category, shelfId: slot.shelfId, shelfCategory: slot.category,
        slotId: slot.slotId, isCorrect: book.category === slot.category }];
    });
  }
}
