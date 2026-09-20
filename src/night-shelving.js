import { BookInstance, bookDefinitions } from './memory-loop.js';

export const shelfCategories = [
  { id: 'literature', label: ['LITERATURE', '文学'], position: [-2.1, 0, 3.6] },
  { id: 'history', label: ['HISTORY', '历史'], position: [-.7, 0, 3.6] },
  { id: 'nature', label: ['NATURE', '自然'], position: [.7, 0, 3.6] },
  { id: 'science', label: ['SCIENCE', '科普'], position: [2.1, 0, 3.6] },
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
  { id: 'night-sky-guide', title: '夜空图鉴', englishTitle: ['A GUIDE TO', 'THE NIGHT SKY'], category: 'science',
    art: 'sky', coverColor: '#293c60', recommendationTags: ['astronomy', 'science', 'children', 'beginner', 'illustrated'],
    content: ['月亮不会自己发光，它反射太阳的光。每天看一看，亮的部分在慢慢改变。',
      '把明亮的星星连起来，就像一把小勺子。找一找，北斗七星在哪里？',
      '地球和其他行星一起绕着太阳转。太阳是一颗会自己发光的恒星。'] },
];
// Each physical shelf copy has its own catalogue entry and authored reading excerpts.
const shelfCatalogue = {
  literature: [
    ['长街来信','LETTERS / HOME','#695148','rain','沈杉','邮差把最后一封信放进门缝。她认出信封上的字，却先去厨房烧了一壶水。|信里没有解释远行的原因，只写了沿途几座小城，以及车站卖的热栗子。|她把回信折成三折，写上仍然记得的地址。第二天清晨，街口的邮筒还挂着露水。'],
    ['河岸慢行','RIVER / WALK','#4c605c','port','许渚','河堤修好以后，老人每天多走一站。他在转弯处停下，看渡船留下的波纹。|少年问对岸有什么。他说有菜市场和旧电影院，还有一条他没有走完的路。|入冬前最后一次散步，芦苇已全白了。老人把手放进口袋，慢慢往桥的方向走。'],
    ['雪原短歌','SNOW / SONGS','#69737b','lighthouse','顾原','雪盖住车辙，也盖住院里那把旧椅子。屋内的人挪开窗边的杯子，为一只鸟留出地方。|清晨的脚印在门外排成两行。他循着脚印去送柴，回来时已经分不清哪行属于自己。|春天从屋檐滴下第一滴水。她收起厚围巾，听见远处有人试着发动那辆沉睡的卡车。'],
    ['末班电车','THE LAST / TRAM','#6a604a','city','唐路','售票员把零钱摊在掌心，数完又收好。今晚的末班车只载着一个抱花的乘客。|电车经过旧学校时慢了下来。乘客隔着窗指了指，说那里从前有一棵很高的树。|终点站到了，花还没有送出去。售票员关掉车灯，替他指向仍亮着灯的小路。'],
    ['茶凉以前','BEFORE / THE TEA COOLS','#695c55','plant','林素','邻居来借梯子，坐下以后却聊起了春天。茶壶里的水快空了，梯子还靠在院墙上。|她记不清那个人的脸，只记得雨鞋在门口排得很齐，走时还把门闩轻轻带上。|多年以后搬家，她在壁橱后找到一只茶杯。杯底的缺口，像一句没有接完的话。'],
    ['远山旅店','MOUNTAIN / INN','#585f4b','rain','陆岑','旅店的钥匙挂在木板上，每把下面都有手写的房号。老板问他要不要靠山的一间。|半夜风大，窗闩轻轻响着。他披衣起来，发现走廊尽头还放着一壶温水。|离开时他没有带走桌上的地图。有人会沿着同一条山路来，也需要知道哪里可以歇脚。'],
    ['小院四季','FOUR / SEASONS','#5c6646','plant','周槐','春天的第一件事是修篱笆。她把新枝插在旧木旁，留下一道能看见街口的缝。|夏夜他们把饭桌搬到院里。没有人急着收碗，葡萄叶在灯下投出缓慢的影子。|冬天菜畦空了，院子显得比从前大。他扫净石阶，等邻居家的孩子来踩第一场雪。'],
    ['异乡日记','AWAY / FROM HOME','#536073','port','程舟','新房间只有一扇朝西的窗。他把行李放下，先找到附近可以买面包的地方。|学会认路以后，他不再数经过几个路口。面包店的老板也开始记得他习惯买什么。|搬走前一晚，他在日记里写下窗外的树。一个陌生地方，原来也能慢慢成为故乡。'],
    ['沿线灯火','LIGHTS / ALONG THE LINE','#795e48','lighthouse','闻遥','列车进山以前，窗外出现了成排的灯。她按亮手表，离约定的时间还有两个小时。|身旁的乘客睡着了。她替他扶住快掉下来的书，读到书签上一个很普通的名字。|天亮时列车靠站。她在人群里看见熟悉的外套，忽然不需要再低头确认时间。'],
  ],
  history: [
    ['石桥旧记','THE STONE / BRIDGE','#6c6350','port','方砚','桥身东侧的石刻记录了最初的建造年份。修缮报告显示，今日栏杆属于后来补建的部分。|渡口账簿保存着修桥以前的通行费用。比较汛期记录，可以理解居民为什么持续要求建桥。|桥旁的商铺曾数次更名。结合地契与旧照片，本章列出街市沿河发展的大致顺序。'],
    ['城墙之外','BEYOND / THE WALL','#685849','city','魏衡','早期城门外分布着货栈与集市。地方志记载，运送柴米的车辆通常在天亮前到达。|城墙拆除之后，原护城河逐步改为排水渠。不同年份的地图保留了这一变化的痕迹。|本章选录三位居民的回忆，并与工程档案对读。个人记忆能补充细节，却不能独自确定年代。'],
    ['邮路百年','A CENTURY / OF POST','#7a5546','rain','宋简','驿站以更换人马维持长途通信。道路状况和季节，会显著影响文书送达的时间。|近代邮局使用统一邮资和邮戳。信封上的转运日期，让研究者能够复原当年的运输路线。|铁路延伸后，一些旧邮路停止使用。沿线小镇留下的邮局建筑，保存着公共服务变迁的线索。'],
    ['钟楼往事','THE OLD / CLOCK TOWER','#6c6b59','gear','钟仪','钟楼落成时，广场仍以露天市场为主。施工账单列出了石料、木架和铸钟的支出。|维修日志记录过一次停钟。机械零件的磨损程度，与当时工匠采用的保养方式有关。|后来城市开始统一报时，钟楼的实用功能逐渐减弱。它仍是老照片中辨认街区的重要标记。'],
    ['铁路初年','EARLY / RAILWAYS','#4e5960','port','梁辙','第一段线路连接矿区与码头。货运量的增长，推动车站附近逐渐形成新的居民区。|时刻表不仅记录列车，也反映城市之间的联系。某些小站最初只在赶集日增加班次。|本章对照工人名册与家属口述，讨论铁路建设如何改变日常通勤和家庭生活。'],
    ['纸上乡土','LOCAL / CHRONICLES','#786e59','plant','吴畴','地方志常按山川、物产和人物分类。阅读时应留意编写年代，以及编者选择材料的方式。|一份田亩清册能说明土地登记情况，却未必完整反映实际耕作。需要结合契约和水利记录。|本书保留旧地名的原字形，同时提供对应索引，便于读者追查同一地点在不同文献中的称呼。'],
    ['市集图录','MARKET / ARCHIVE','#775e53','city','任集','画中的摊位沿街排列，招牌指向不同作坊。图像可以提示行业分布，也可能包含画家的安排。|度量衡的统一改变了交易习惯。本章展示几种旧秤砣，并说明铭文和校验印记的用途。|收市后的清扫和消防同样需要管理。街区公约记录了摊贩分担公共事务的具体办法。'],
    ['海图沿革','CHARTING / THE COAST','#52696c','port','陶汐','早期海图常突出港湾和显著山形，供沿岸航行辨认。其比例与现代地图并不完全一致。|测量工具改进后，海岸线得到更准确的标绘。同一处岬角在不同时期图纸上有明显差别。|比较旧海图时，必须同时核对版本和坐标体系。岸线位置的变化也可能来自填海或泥沙沉积。'],
    ['旧校年册','SCHOOL / ANNALS','#6b6158','rain','赵序','学校最初借用一栋民居授课。收支簿中的课桌采购单，提供了学生人数增长的旁证。|课程表留下了教育观念变化的痕迹。手工、算术和自然观察，在不同年份占有不同课时。|毕业合影背面的姓名，是整理校史的重要资料。辨认时应记录来源，并保留无法确认的部分。'],
  ],
  nature: [
    ['潮间带手册','BETWEEN / THE TIDES','#526b62','port','江汀','退潮后露出的岩石上，常见藤壶和帽贝。观察前应查好潮汐，留意回程可能被淹没的路径。|潮池里的生物需要应对温度与盐度变化。不要把海星带离水面，也不要随意移动遮阴的石块。|记录一种生物时，写下大小、颜色和附着位置。照片比带走标本更适合日常观察。'],
    ['庭院来鸟','GARDEN / BIRDS','#697152','plant','乔羽','清晨先听叫声，再寻找枝叶间的轮廓。常见鸟也会因年龄与季节不同而呈现不同羽色。|观察喂食行为时保持距离。过度靠近巢穴可能让亲鸟停止返回，长焦镜头比伸手查看更合适。|记录表可以包括日期、天气和停留时间。连续观察同一处庭院，才能看出季节性的变化。'],
    ['溪流生境','LIFE IN / THE STREAM','#466761','rain','杜溪','溪底石块之间有许多小型水生动物。水流速度、含氧量和底质共同决定它们的栖息位置。|蜉蝣与石蝇的幼体常藏在石下。短暂观察后，应把石块轻轻放回原处，避免破坏微小水域。|雨后水位可能快速上涨。采集记录不能代替安全判断，沿岸观察时应保留清楚的退路。'],
    ['苔藓小世界','THE MOSS / WORLD','#4b6142','plant','莫青','苔藓没有真正的根，常用假根固定在表面。它们能够吸收水分，却不适合被长久泡在水中。|潮湿天气里，叶片展开，颜色显得鲜亮。干燥时收拢的姿态，是许多种类应对缺水的方式。|放大镜可以帮助辨认叶序和孢蒴。观察结束后不要刮走整片苔藓，让原有群落继续生长。'],
    ['林地种子','WOODLAND / SEEDS','#726846','plant','叶实','翅果借助风传播，带钩的小果实可能附在动物身上。种子的外形往往与传播方式有关。|种子落地后不一定立即萌发。有些需要经历低温，或等待足够的水分和合适的光照。|把捡到的种子画在纸上，标注发现地点。不同树木果实成熟的时间，是识别树种的线索。'],
    ['云的形状','FORMS / OF CLOUD','#627c7e','rain','白岚','积云常有清楚的轮廓和平坦的底部。空气上升冷却，水汽凝结，便形成了可见的云滴。|层云像铺开的薄毯，可能覆盖很大一片天空。云的高度与厚度，会影响地面看见的亮度。|观察云时同时记下风向和天气变化。单凭某一张云的照片，不能准确预测接下来几天的天气。'],
    ['山径花历','TRAIL / BLOSSOMS','#795f67','plant','花芷','同一条山径，春夏开花的植物不同。海拔、坡向与遮阴，会让相近地点出现不同的花期。|辨认野花时不只看颜色，也要观察叶片、花瓣数量和生长方式。不要尝食无法确认的植物。|每月在同一地点拍照，能得到一份自己的花历。记录不必完整，持续观察比一次采集更重要。'],
    ['湿地夜听','WETLAND / SOUNDS','#4b6258','port','芦声','日落后的湿地依然活跃。蛙鸣、昆虫和水鸟的声音，来自不同距离与不同高度。|录音时应注明地点和风向。车辆与水泵的声音也要保留记录，避免把环境噪声误认成动物。|夜间观察应沿既有步道，减少强光照射。听见声音并不意味着需要走近寻找它的来源。'],
    ['石滩拾趣','PEBBLES / ON THE SHORE','#6f7461','lighthouse','石澄','海浪反复搬动石块，使棱角逐渐磨圆。石面的条纹与颗粒，常能提示它原先属于哪类岩石。|深浅不同的色带可能来自矿物差异，也可能是后来的裂隙填充。潮湿会让颜色显得更鲜明。|把小石头放回原处前画一张速写。标出大小与纹理，比只记一个猜测的名称更有帮助。'],
  ],
  science: [
    ['声音的形状','SHAPES / OF SOUND','#665c78','gear','卢弦','声音来自物体振动，通过空气等介质传播。敲击不同大小的杯子，可以听到音高的变化。|频率与音高有关，振幅则影响声音强弱。两个声音听起来不同，还可能因为包含不同的泛音。|回声来自声波反射。距离足够远时，反射声与原声才能被耳朵分开辨认。'],
    ['纸桥实验','PAPER / BRIDGES','#687365','city','许构','把纸平铺在两端之间，它很容易弯曲。折成连续褶皱后，同样的纸往往能承受更大的载荷。|实验时保持跨度和纸张相同，只改变折法。每次逐步增加相同的重物，记录开始变形的位置。|纸桥不能代表所有真实桥梁，但能帮助理解截面形状如何影响刚度。比较结果时也要记录失败。'],
    ['电路入门','FIRST / CIRCUITS','#5b6679','gear','傅环','一个简单电路需要电源、导线和用电器。回路断开时，灯泡便不能持续发光。|串联元件处于同一条电流路径。并联支路两端连接到相同节点，改变一支路不一定切断另一支路。|练习只使用低压电池和合适元件，不接触市电。连接之前确认极性，避免直接短接电池两端。'],
    ['水的旅程','WATER / IN MOTION','#4e6b7a','rain','温澜','液态水吸热可以蒸发，水蒸气遇冷能够凝结。厨房玻璃上的小水滴，是容易观察的例子。|水在陆地、海洋和大气之间持续循环。降水的一部分汇入河流，另一部分进入土壤或重新蒸发。|同样的水量放在不同容器里，蒸发速度可能不同。表面积、温度和空气流动都会影响结果。'],
    ['磁针与方向','MAGNETS / AND DIRECTION','#6d5e68','gear','秦向','磁针受到磁场作用，会趋向一定方向。把小磁铁靠近指南针，能观察到指针发生偏转。|地理北方与磁北方向并不总是重合。使用地图和指南针时，应了解当地磁偏角。|铁制桌面和电子设备可能干扰测量。实验时远离这些物体，多次读数后再比较结果。'],
    ['透镜小课','LOOKING / THROUGH LENSES','#66717f','lighthouse','顾镜','透镜利用折射改变光的传播方向。凸透镜与凹透镜的外形不同，对平行光的作用也不同。|移动物体、透镜和屏幕，可以观察像的大小与方向变化。记录距离时要始终使用同一个测量基准。|不要用透镜直视太阳，也不要把聚光点对准眼睛。普通台灯已经足够用于简单成像实验。'],
    ['杠杆与天平','LEVERS / AND BALANCE','#77634d','gear','杨衡','把尺子放在支点上，两端放置小重物。改变重物与支点的距离，会改变尺子的平衡状态。|转动效果既取决于力，也取决于力臂。讨论杠杆时，要说明施力方向与支点的位置。|天平需要先调零，再比较两侧物体。风和桌面倾斜都可能影响读数，因此应重复测量。'],
    ['材料为什么','EVERYDAY / MATERIALS','#6d756c','city','岳质','金属、木材与塑料触摸起来不同，并不只因为温度不同。它们传递热量的能力也有差异。|材料的硬度与韧性不是一回事。玻璃较硬却容易脆裂，而某些柔软材料可以承受较大的形变。|选择材料要考虑用途、成本和使用环境。没有一种材料能在所有条件下同时表现最好。'],
    ['长度的尺度','MEASURING / THE WORLD','#786e60','port','纪度','测量需要共同的单位。记录一张桌子的长度时，数字旁应注明使用的是米、厘米还是毫米。|尺子的最小刻度限制读数精度。换用更细的刻度，也不能消除尺子歪放和视线偏斜造成的误差。|多次测量可以发现偶然差异。写下结果时保留合理位数，并说明采用的方法和测量条件。'],
  ],
};
for (const [category, entries] of Object.entries(shelfCatalogue)) {
  entries.forEach(([title, english, coverColor, art, author, content], i) => shelvingDefinitions.push({
    id: `${category}-collection-${i}`, title, englishTitle: english.split(' / '), category,
    coverColor, art, author, coverStyle: i % 4, coverSeed: i + 1, content: content.split('|'),
  }));
}
for (const definition of shelvingDefinitions) definition.recommendationTags ??= [definition.category];
export const scatteredPositions = [
  [-2.94, .885, -2.42], [-2.68, .094, -2.13], [-1.46, .094, -2.05],
  [.85, .094, -3.45], [3.62, .094, -1.05], [1.95, .094, -.18],
];

export class NightShelvingController {
  books = new Map();
  slots = [];
  taskBookIds = [];
  heldBookId = null;
  result = null;
  constructor() {
    shelvingDefinitions.slice(0, scatteredPositions.length).forEach((definition, i) => {
      const id = `shelving_${definition.id}`;
      this.taskBookIds.push(id);
      this.books.set(id, { ...new BookInstance(id, definition.id), category: definition.category,
        location: { type: 'scattered', position: scatteredPositions[i] } });
    });
    for (const shelf of shelfCategories) {
      const definitions = shelvingDefinitions.filter(d => d.category === shelf.id && d.id.includes('-collection-'));
      let copy = 0;
      for (let i = 0; i < 12; i++) {
        const column = (i % 3) * 2 + (i >= 6 ? 1 : 0), upper = Math.floor(i / 3) % 2;
        const slot = { slotId: `${shelf.id}_${i}`, shelfId: shelf.id, category: shelf.id,
          localPosition: [-.45 + column * .18, upper ? 1.57 : .73, .075],
          localRotation: [0, Math.PI / 2, 0], occupantBookId: null };
        if ([0, 2, 4].includes(i) || i >= 6) {
          const definition = definitions[copy++];
          const id = `shelf_${slot.slotId}`;
          slot.occupantBookId = id;
          this.books.set(id, { ...new BookInstance(id, definition.id), category: definition.category,
            location: { type: 'shelf', shelfId: shelf.id, slotId: slot.slotId } });
        }
        this.slots.push(slot);
      }
    }
    const skySlot = this.slots.find(s => s.slotId === 'science_5');
    skySlot.occupantBookId = 'book_night_sky_guide_001';
    this.books.set(skySlot.occupantBookId, {...new BookInstance(skySlot.occupantBookId, 'night-sky-guide'),
      category: 'science', location: {type: 'shelf', shelfId: 'science', slotId: skySlot.slotId}});
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
