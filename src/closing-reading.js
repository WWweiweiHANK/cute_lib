export const personalReadingBook = {
  id: 'personal-night-voyage', title: '夜航', englishTitle: ['NIGHT', 'PASSAGE'],
  coverColor: '#35414a', art: 'rain', personal: true,
  content: [
    '末班车驶过桥面，雨水沿着车窗缓缓落下。靠窗的旅人收好车票，看见河对岸还有一盏灯亮着。',
    '小巷里的店铺关了门，屋檐替晚归的人留下一小块干燥的地方。他站在那里，等一阵雨过去。',
    '港口的船早已停稳，水面把岸边的灯拉得很长。有人把围巾叠好，放在明天要带走的行李上。',
    '回家的路并不远。经过最后一个路口时，他放慢了脚步，想起桌上留着半杯茶，和一本尚未读完的书。',
  ],
};

export class ClosingReading {
  // Continue the counter clock; starting at 21:35 here would make time run backwards.
  times = ['21:47', '21:51', '21:55', '21:58', '22:00'];
  readPages = new Set();
  readingEvents = [];
  page = 0;
  dwell = 0;
  get advances() { return this.readPages.size; }
  get time() { return this.times[Math.min(this.advances, 4)]; }
  get ready() { return this.advances >= 4; }
  update(page, dt) {
    if (page !== this.page) { this.page = page; this.dwell = 0; }
    if (page < 1 || page > 4 || this.readPages.has(page)) return false;
    this.dwell += dt;
    if (this.dwell < 2) return false;
    this.readPages.add(page);
    return true;
  }
}
