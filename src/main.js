import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import {
  profiles,
  makePerson,
  makeCard,
  makeBook,
  updateBookDamage,
  findBookDamage,
  box,
  material,
} from "./assets.js";
import { buildEnvironment } from "./environment.js";
import { Transaction } from "./transaction.js";
import { returnCases } from "./return-cases.js";
import { CustomerSequenceController, daySequence } from "./memory-loop.js";
import { LibraryAudio } from "./audio.js";
import { ClosingReading, personalReadingBook } from './closing-reading.js';
import { NightShelvingController } from './night-shelving.js';
import { buildShelvingWorld, moveWalker } from './night-world.js';

const $ = (id) => document.getElementById(id);
const query = new URLSearchParams(location.search);
const DEV_MODE = query.get("dev") === "1";
const entryMode = query.get('mode');
let gamePhase = 'DAY_COUNTER', personalHeld = false, nightHover = null;
const reading = new ClosingReading(), shelving = new NightShelvingController();
const keys = new Set();
const isNight = () => gamePhase.startsWith('NIGHT_');
const interactionPhase = () => gamePhase === 'DAY_COUNTER' ? tx.phase :
  cameraMode === 'OBJECT_INSPECT' ? 'BOOK_INSPECT' :
  (personalHeld || shelving.heldBookId) ? 'BOOK_HELD' : 'ITEMS_PLACED';
let selectedCase = query.get("case") === "B" ? "B" : "A";
const isMemory = query.get("mode") === "memory";
const sequence = isMemory ? new CustomerSequenceController() : null;
let visit = sequence?.begin();
let isReturn = query.get("mode") === "return";
const returnCase = returnCases[selectedCase];
const memoryProfiles = {
  lin_zhou: {
    ...profiles.A,
    id: "lin_zhou",
    name: "林舟",
    hairStyle: "short",
    shirtColor: "#34463c",
  },
  zhou_ning: { ...profiles.B, id: "zhou_ning", name: "周宁" },
};
let personProfile = isMemory
  ? memoryProfiles[visit.step.customerId]
  : profiles[selectedCase];
let press = null,
  inspectionSnapshot = null,
  selectedHotspot = null;
let selectedMinFacing = 0;
const CLICK_MOVE_THRESHOLD = 6,
  CLICK_TIME_THRESHOLD = 250;
let started = false,
  busy = false,
  hover = null,
  bookOpen = false,
  dragging = false;
let bookPage = 0;
let cameraMode = "COUNTER_FREE",
  cameraBeat = "free",
  focusBlend = 0;
let focusYaw = 0,
  focusPitch = 0,
  handPitch = 0;
const heldBookPosition = [0.42, -0.22, -1.05];
const heldBookRotation = [-0.12, -0.35, 0.08];
let targetYaw = 0,
  targetPitch = 0,
  currentYaw = 0,
  currentPitch = 0;
let lastX = 0,
  lastY = 0,
  angularX = 0,
  angularY = 0,
  time = 0,
  lastTime = performance.now();
let toastTimer,
  dialogueTimer,
  recordSaved = false;
let taskTimer, helpTimer, lastUIState;
const shownHelp = new Set();
let nextPaper = 37,
  nextWood = 53;
let nextFootstep = 0;
const pointer = new THREE.Vector2(0, 0),
  MAX_YAW = THREE.MathUtils.degToRad(5),
  MAX_PITCH = THREE.MathUtils.degToRad(3);
const audio = new LibraryAudio(),
  animations = [];
const scene = new THREE.Scene();
scene.background = new THREE.Color("#152e45");
scene.fog = new THREE.FogExp2("#142a38", 0.022);
const camera = new THREE.PerspectiveCamera(
  67,
  innerWidth / innerHeight,
  0.035,
  48,
);
camera.position.set(0, 1.67, 2.64);
camera.rotation.order = "YXZ";
camera.rotation.x = -0.12;
scene.add(camera);
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
  });
} catch (error) {
  $("fatal").hidden = false;
  $("fatal").textContent =
    "无法创建 3D 画面。请使用支持 WebGL 2 的桌面浏览器，并开启硬件加速。";
  throw error;
}
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.88;
$("game").appendChild(renderer.domElement);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(
  new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    0.15,
    0.45,
    1.25,
  ),
);
composer.addPass(new OutputPass());
const grain = new ShaderPass({
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 } },
  vertexShader:
    "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
  fragmentShader:
    "uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float n=fract(sin(dot(vUv*vec2(1300.,800.)+mod(uTime,10.),vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*.018;gl_FragColor=vec4(c,1.);}",
});
composer.addPass(grain);
const env = buildEnvironment(scene, { returnMode: isReturn });
const nightWorld = buildShelvingWorld(scene, env.sortingShelves, shelving);
const personalModel = makeBook(personalReadingBook);
const personalHome = [.7, 1.105, 1.69];
personalModel.position.fromArray(personalHome);
personalModel.rotation.set(-Math.PI / 2, 0, -.09);
scene.add(personalModel);
// A close, soft reflection from the work lamp keeps held paper legible from the seated side.
const inspectionLight = new THREE.PointLight("#fff0d0", 1.3, 1.65, 2);
inspectionLight.position.set(-0.25, 0.22, 0.12);
camera.add(inspectionLight);
let person = makePerson(personProfile);
scene.add(person);
person.position.set(2.9, 0, -4.85);
person.visible = false;
// Case B uses a clearly different portrait profile; the two renderers share the same schema.
let photoProfile = isMemory ? personProfile : profiles.A;
let card = makeCard(photoProfile),
  book = makeBook(
    isMemory
      ? { ...visit.definition, damageProfile: visit.book.visualDamages() }
      : isReturn
        ? returnCase.book
        : undefined,
  );
const personModels = new Map([[personProfile.id, { person, card }]]);
const bookModels = new Map(isMemory ? [[visit.book.instanceId, book]] : []);
scene.add(card, book);
card.visible = false;
book.visible = false;
const cardHome = new THREE.Vector3(0.35, 1.073, 1.2),
  bookHome = new THREE.Vector3(-0.36, 1.098, 1.08);
const flat = new THREE.Euler(-Math.PI / 2, 0, -0.065);
card.position.copy(cardHome);
card.rotation.copy(flat);
book.position.copy(bookHome);
book.rotation.copy(flat);
let tx =
  visit?.transaction ||
  new Transaction({
    type: isReturn ? "return" : "borrow",
    customerId: isReturn ? returnCase.customerId : profiles[selectedCase].id,
    bookId: isReturn ? returnCase.book.id : "midnight-atlas",
    damageProfile: isReturn ? returnCase.book.damageProfile : [],
    existingDamageBeforeLoan: isReturn
      ? returnCase.existingDamageBeforeLoan
      : [],
    actualIdentityMatch: selectedCase === "A",
  });

const proxyMaterial = new THREE.MeshBasicMaterial({
  transparent: true,
  opacity: 0,
  depthWrite: false,
});
const targets = {};
function target(name, size, pos) {
  const mesh = box(scene, size, pos, proxyMaterial);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.userData.name = name;
  targets[name] = mesh;
  return mesh;
}
target("card", [0.44, 0.08, 0.29], cardHome.toArray());
target("book", [0.48, 0.12, 0.62], bookHome.toArray());
target("bookSlot", [0.5, 0.1, 0.63], bookHome.toArray());
target("scanner", [0.64, 0.57, 0.68], [1.22, 1.32, 0.84]);
target("reject", [0.7, 0.18, 0.66], [-1.14, 1.14, 0.87]);
targets.return = targets.reject;
if (isReturn) targets.return.userData.name = "return";
target("customer", [0.75, 1.25, 0.45], [0, 1.2, -0.03]);
target('personalBook', [.47, .12, .61], personalHome);
// Rectangles use the same normalized coordinates as the printed card texture.
const cardFields = {
  photo: [47 / 1024, 169 / 640, 260 / 1024, 315 / 640],
  name: [350 / 1024, 185 / 640, 610 / 1024, 130 / 640],
  date: [350 / 1024, 355 / 640, 610 / 1024, 90 / 640],
};
const raycaster = new THREE.Raycaster();

function prepareVisit(next) {
  person.removeFromParent();
  card.removeFromParent();
  book.removeFromParent();
  person.visible = card.visible = book.visible = false;
  visit = next;
  tx = next.transaction;
  isReturn = tx.type === "return";
  personProfile = memoryProfiles[next.step.customerId];
  photoProfile = personProfile;
  if (!personModels.has(personProfile.id))
    personModels.set(personProfile.id, {
      person: makePerson(personProfile),
      card: makeCard(photoProfile),
    });
  ({ person, card } = personModels.get(personProfile.id));
  if (!bookModels.has(next.book.instanceId))
    bookModels.set(next.book.instanceId, makeBook(next.definition));
  book = bookModels.get(next.book.instanceId);
  updateBookDamage(book, next.book.visualDamages());
  scene.add(person, card, book);
  person.visible = card.visible = book.visible = false;
  person.position.set(2.9, 0, -4.85);
  person.rotation.set(0, 0, 0);
  card.position.copy(cardHome);
  card.rotation.copy(flat);
  book.position.copy(bookHome);
  book.rotation.copy(flat);
  book.userData.cover.rotation.y = 0;
  bookPage = 0;
  bookOpen = dragging = recordSaved = false;
  press = inspectionSnapshot = selectedHotspot = hover = null;
  angularX = angularY = 0;
  inspectionLight.position.set(-0.25, 0.22, 0.12);
  targets.reject.userData.name = isReturn ? "return" : "reject";
  env.setReturnMode(isReturn);
  env.setScanner(false);
  $("complete").querySelector("p").textContent = isReturn
    ? "本次还书处理已记录"
    : "本次借阅处理已记录";
  updateUI();
}

function tween(duration, update) {
  return new Promise((resolve) => {
    animations.push({ elapsed: 0, duration, update, resolve });
  });
}
function wait(seconds) {
  return tween(seconds, () => {});
}
const smooth = (x) => x * x * (3 - 2 * x);
async function setCameraMode(mode, duration = 0.7, framing = "face") {
  cameraMode = mode;
  cameraBeat = mode === "DIALOGUE_FOCUS" ? framing : "free";
  if (mode === "DIALOGUE_FOCUS") {
    const face = person.userData.head.getWorldPosition(new THREE.Vector3());
    // Aim just below the eyes: keep the face above centre and the rainy room visible.
    face.y -= 0.12;
    if (framing === "damage") face.x += 0.07;
    const dx = face.x - camera.position.x,
      dz = camera.position.z - face.z;
    focusYaw = Math.atan2(-dx, dz);
    focusPitch = Math.atan2(face.y - 1.67, Math.hypot(dx, dz)) + 0.12;
  }
  const from = focusBlend,
    fromHand = handPitch;
  const to = mode === "DIALOGUE_FOCUS" ? 1 : 0;
  await tween(duration, (t) => {
    focusBlend = THREE.MathUtils.lerp(from, to, smooth(t));
    handPitch = fromHand * (1 - smooth(t));
  });
}
async function shiftAttention(beat, degrees, duration = 0.5) {
  cameraBeat = beat;
  const from = handPitch,
    to = THREE.MathUtils.degToRad(degrees);
  await tween(
    duration,
    (t) => (handPitch = THREE.MathUtils.lerp(from, to, smooth(t))),
  );
}
async function transform(object, parent, position, rotation, duration = 0.32) {
  parent.attach(object);
  const from = object.position.clone(),
    fromQ = object.quaternion.clone(),
    to = new THREE.Vector3(...position),
    toQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation));
  await tween(duration, (t) => {
    const k = smooth(t);
    object.position.lerpVectors(from, to, k);
    object.quaternion.slerpQuaternions(fromQ, toQ, k);
  });
}
function dialogue(text, speaker = "访客", seconds = 3.5) {
  clearTimeout(dialogueTimer);
  $("dialogue").hidden = false;
  $("dialogue").querySelector("p").textContent = text;
  $("dialogue").querySelector(".speaker").textContent = speaker;
  dialogueTimer = setTimeout(
    () => ($("dialogue").hidden = true),
    seconds * 1000,
  );
}
function toast(text, duration = 2500) {
  clearTimeout(toastTimer);
  $("toast").textContent = text;
  $("toast").hidden = false;
  toastTimer = setTimeout(() => ($("toast").hidden = true), duration);
}
function setTask(title) {
  $("task-title").textContent = title;
  clearTimeout(taskTimer);
  $("task").hidden = false;
  taskTimer = setTimeout(() => ($("task").hidden = true), 2800);
}
function updateUI() {
  const s = interactionPhase();
  if (s !== lastUIState) {
    clearTimeout(helpTimer);
    $("inspect-help").hidden = true;
    lastUIState = s;
    if (
      ["BOOK_HELD", "BOOK_INSPECT", "ID_HELD"].includes(s) &&
      !shownHelp.has(s)
    ) {
      shownHelp.add(s);
      $("inspect-help").hidden = false;
      $("inspect-help").innerHTML =
        s === "BOOK_INSPECT"
          ? "<span>左键拖动</span>旋转 <span>滚轮</span>翻页 <span>R</span>回到手中"
          : s === "BOOK_HELD"
            ? "<span>R</span>仔细查看 <span>左键</span>点击目标使用"
            : "点击证件信息提问 · 点击顾客递还";
      helpTimer = setTimeout(() => ($("inspect-help").hidden = true), 5000);
    }
  }
}
async function armGesture(side, action) {
  const arm = person.userData.arms[side];
  const start = arm.rotation.x;
  await tween(0.28, (t) => {
    arm.rotation.x = THREE.MathUtils.lerp(start, -1.0, smooth(t));
  });
  await action();
  await tween(0.28, (t) => {
    arm.rotation.x = -1 * (1 - smooth(t));
  });
}
async function walkTo(position, duration) {
  const from = person.position.clone(),
    to = new THREE.Vector3(...position);
  const dx = to.x - from.x,
    dz = to.z - from.z,
    angle = Math.atan2(dx, dz),
    old = person.rotation.y;
  await tween(
    0.25,
    (t) => (person.rotation.y = THREE.MathUtils.lerp(old, angle, smooth(t))),
  );
  await tween(duration, (t) => {
    person.position.lerpVectors(from, to, t);
    const gait = Math.sin(t * duration * 8);
    person.userData.body.position.y = Math.abs(gait) * 0.015;
    person.userData.legs[0].rotation.x = gait * 0.28;
    person.userData.legs[1].rotation.x = -gait * 0.28;
    person.userData.arms[0].rotation.x = -gait * 0.14;
    person.userData.arms[1].rotation.x = gait * 0.14;
  });
  person.userData.legs.forEach((l) => (l.rotation.x = 0));
  person.userData.arms.forEach((a) => (a.rotation.x = 0));
}
async function start() {
  if (started) return;
  started = true;
  busy = true;
  await audio
    .start()
    .catch(() => toast("当前浏览器未启用声音，画面与操作仍可继续。"));
  $("welcome").hidden = true;
  $("settings").hidden = true;
  $("opening").hidden = false;
  setTimeout(() => ($("opening").hidden = true), 2000);
  $("reticle").hidden = false;
  await wait(1.3);
  if (entryMode === 'closing') return beginClosingReading();
  if (entryMode === 'shelving') {
    env.setClosed();
    [1, 2, 3, 4].forEach(page => reading.readPages.add(page));
    document.querySelector('.clock').textContent = '22:00';
    camera.position.set(3.15, 1.85, 2.65);
    enterNight();
    return;
  }
  await arriveVisit();
}
async function arriveVisit() {
  busy = true;
  tx.dispatch("START");
  audio.bell();
  person.visible = true;
  await tween(0.5, (t) => (env.door.rotation.y = -smooth(t) * 0.95));
  await walkTo([1.8, 0, -3.3], 0.75);
  await tween(0.5, (t) => (env.door.rotation.y = -(1 - smooth(t)) * 0.95));
  await walkTo([0, 0, -0.03], 2.35);
  const oldYaw = person.rotation.y;
  await tween(0.6, (t) => {
    person.rotation.y = oldYaw * (1 - smooth(t));
  });
  tx.dispatch("ARRIVE");
  setTask(isReturn ? "处理还书" : "处理借阅");
  await setCameraMode("DIALOGUE_FOCUS");
  dialogue(
    visit?.step.greeting ||
      (isReturn ? "你好，我来还书。" : "晚上好，我想借这本书。"),
  );
  await wait(1.4);
  await Promise.all([
    shiftAttention("book", -2),
    armGesture(0, async () => {
      book.visible = true;
      book.position.set(-0.25, 1.18, 0.34);
      book.rotation.set(-0.9, 0, 0.1);
      await transform(
        book,
        scene,
        bookHome.toArray(),
        flat.toArray().slice(0, 3),
        0.38,
      );
      audio.tap();
    }),
  ]);
  if (!isReturn) {
    await shiftAttention("face", 0, 0.35);
    dialogue("这是我的借阅证。");
    await Promise.all([
      shiftAttention("card", -2),
      armGesture(1, async () => {
        card.visible = true;
        card.position.set(0.25, 1.2, 0.4);
        card.rotation.set(-1, 0, -0.1);
        await transform(
          card,
          scene,
          cardHome.toArray(),
          flat.toArray().slice(0, 3),
          0.3,
        );
        audio.paper();
      }),
    ]);
  }
  await wait(0.7);
  await setCameraMode("COUNTER_FREE", 0.5);
  tx.dispatch("PLACE_ITEMS");
  busy = false;
  updateUI();
}
async function pickup(kind) {
  const event = kind === "card" ? "PICK_ID" : "PICK_BOOK";
  if (!tx.dispatch(event)) return;
  busy = true;
  hover = null;
  $("dialogue").hidden = true;
  updateUI();
  audio.paper();
  if (kind === "card")
    await transform(card, camera, [0.33, -0.12, -0.78], [0, -0.04, 0]);
  else {
    angularX = angularY = 0;
    await transform(book, camera, heldBookPosition, heldBookRotation);
  }
  busy = false;
}
async function closeCover() {
  bookOpen = false;
  bookPage = 0;
  const from = book.userData.cover.rotation.y;
  await tween(
    0.3,
    (t) => (book.userData.cover.rotation.y = from * (1 - smooth(t))),
  );
}
async function exitInspect() {
  if (gamePhase === 'DAY_COUNTER' ? !tx.dispatch('EXIT_INSPECT') : interactionPhase() !== 'BOOK_INSPECT') return;
  busy = true;
  dragging = false;
  press = null;
  angularX = angularY = 0;
  updateUI();
  if (bookOpen) await closeCover();
  await transform(book, camera, heldBookPosition, heldBookRotation);
  cameraMode = isNight() ? 'FREE_LOOK' : 'COUNTER_FREE';
  busy = false;
  updateUI();
  if (gamePhase === 'CLOSING_READING' && reading.ready) await finishReading();
}
async function putBack() {
  if (!tx.dispatch("PUT_BOOK")) return;
  busy = true;
  audio.tap();
  await transform(book, scene, bookHome.toArray(), flat.toArray().slice(0, 3));
  busy = false;
  updateUI();
}
async function inspectAgain() {
  if (gamePhase === 'DAY_COUNTER' ? !tx.dispatch('INSPECT_AGAIN') : interactionPhase() !== 'BOOK_HELD') return;
  busy = true;
  cameraMode = "OBJECT_INSPECT";
  updateUI();
  audio.paper();
  await transform(book, camera, [0.12, gamePhase === 'CLOSING_READING' ? -.13 : -0.025, -1.35], [0.02, -0.07, 0.015]);
  busy = false;
}
async function flip(direction) {
  if (interactionPhase() !== "BOOK_INSPECT" || busy) return;
  const next = THREE.MathUtils.clamp(
    bookPage + direction,
    0,
    book.userData.pages.length,
  );
  if (next === bookPage) return;
  busy = true;
  angularX = angularY = 0;
  dragging = false;
  press = null;
  audio.paper();
  if (next === 0) {
    await closeCover();
  } else {
    book.userData.page.material.map = book.userData.pages[next - 1];
    if (!bookOpen)
      await tween(
        0.38,
        (t) => (book.userData.cover.rotation.y = -smooth(t) * Math.PI * 0.94),
      );
    bookOpen = true;
    bookPage = next;
    await wait(0.16);
  }
  busy = false;
}
async function commit(decision) {
  if (!tx.dispatch(decision === "borrow" ? "BORROW" : "REJECT")) return;
  busy = true;
  updateUI();
  await transform(
    book,
    scene,
    decision === "borrow" ? [1.22, 1.205, 0.87] : [-1.14, 1.155, 0.87],
    [-Math.PI / 2, 0, decision === "borrow" ? 0 : 0.04],
    0.36,
  );
  audio.tap();
  if (decision === "borrow") {
    env.scanLine.visible = true;
    await wait(0.33);
    audio.scan();
    env.setScanner(true);
    env.scanLine.visible = false;
    cameraBeat = "scan-pause";
    await wait(0.25);
  } else {
    cameraBeat = "reject-pause";
    dialogue("这样啊……");
    await wait(0.3);
  }
  tx.dispatch("RESPOND");
  await setCameraMode("DIALOGUE_FOCUS", decision === "borrow" ? 0.7 : 0.8);
  if (decision === "borrow") {
    dialogue("谢谢。");
    await wait(0.65);
    dialogue("晚上辛苦了。");
  }
  if (decision === "reject") {
    await tween(0.25, (t) => (person.userData.head.rotation.y = -t * 0.24));
    await wait(0.5);
    await tween(
      0.25,
      (t) => (person.userData.head.rotation.y = -(1 - t) * 0.24),
    );
    dialogue("那算了。");
  }
  await wait(1.1);
  if (!tx.cardReturned)
    await armGesture(1, async () => {
      await transform(card, scene, [0.25, 1.2, 0.2], [-0.7, 0, 0], 0.3);
      card.visible = false;
    });
  if (decision === "borrow")
    await armGesture(0, async () => {
      await transform(book, scene, [-0.25, 1.1, 0.22], [0, 0, 0.06], 0.4);
      person.attach(book);
    });
  await finishVisit();
}
async function finishVisit() {
  await setCameraMode("COUNTER_FREE", 0.5);
  tx.dispatch("LEAVE");
  updateUI();
  await walkTo([1.85, 0, -3.1], 2.3);
  await tween(0.5, (t) => (env.door.rotation.y = -smooth(t) * 0.95));
  audio.bell();
  await walkTo([2.9, 0, -4.95], 1);
  person.visible = false;
  if (tx.decision === "borrow") book.visible = false;
  await tween(0.6, (t) => (env.door.rotation.y = -(1 - smooth(t)) * 0.95));
  tx.dispatch("COMPLETE");
  saveRecord();
  updateUI();
  $("dialogue").hidden = true;
  if (sequence) {
    sequence.complete(tx);
    const nextStep = daySequence[sequence.index];
    if (nextStep) {
      await wait(nextStep.delayBefore);
      const next = sequence.begin();
      if (next) {
        prepareVisit(next);
        await arriveVisit();
        return;
      }
    }
  }
  busy = false;
  $("complete").hidden = false;
  setTimeout(() => ($("complete").hidden = true), 3000);
  $("dialogue").hidden = true;
  // The final visitor's record stays intact; closing is a separate high-level phase.
  guard(beginClosingReading());
}
async function beginClosingReading() {
  await wait(2.5);
  gamePhase = 'CLOSING_READING';
  busy = false;
  document.querySelector('.clock').textContent = reading.time;
  $('complete').hidden = true;
  toast('离闭馆还有一会儿。');
}
async function pickupPersonal() {
  if (personalHeld || gamePhase !== 'CLOSING_READING') return;
  book = personalModel;
  personalHeld = true;
  bookOpen = false; bookPage = 0;
  angularX = angularY = 0;
  busy = true;
  audio.paper();
  await transform(book, camera, heldBookPosition, heldBookRotation);
  busy = false;
  updateUI();
}
async function returnPersonal() {
  busy = true;
  await transform(book, scene, personalHome, [-Math.PI / 2, 0, -.09], .45);
  audio.paper(.018);
  personalHeld = false;
  busy = false;
  updateUI();
}
async function finishReading() {
  await returnPersonal();
  busy = true;
  dialogue('好了，下班了。', '你', 2);
  await wait(2.7);
  gamePhase = 'CLOSING_TRANSITION';
  env.setClosed(0);
  audio.tone(185, .07, .015);
  await tween(.6, t => env.setClosed(smooth(t)));
  const from = camera.position.clone();
  audio.paper(.016);
  await tween(1, t => {
    camera.position.y = from.y + .18 * smooth(t);
    camera.position.z = from.z + .08 * smooth(t);
  });
  enterNight();
}
function enterNight() {
  gamePhase = 'NIGHT_FREE_ROAM';
  cameraMode = 'FREE_LOOK';
  focusBlend = 0;
  // Keep nearby paper readable away from the counter, without lighting distant scenery.
  inspectionLight.position.set(0, .18, -.35);
  inspectionLight.intensity = 1.5;
  inspectionLight.distance = 2.4;
  keys.clear();
  busy = false;
  toast('WASD 行走 · 点击画面环顾 · R 查看手中的书');
}
async function nightInteract() {
  if (busy || !nightHover) return;
  const hit = nightHover;
  if (!shelving.heldBookId) {
    const id = hit.bookId || hit.slot?.occupantBookId;
    if (!shelving.pickup(id)) return;
    if (gamePhase === 'NIGHT_SHELVING_COMPLETE') $('toast').hidden = true;
    book = nightWorld.books.get(id);
    busy = true;
    gamePhase = 'NIGHT_SHELVING';
    bookPage = 0; bookOpen = false;
    angularX = angularY = 0;
    audio.paper(.022);
    await transform(book, camera, heldBookPosition, heldBookRotation);
    busy = false;
    updateUI();
  } else if (hit.slot && !hit.slot.occupantBookId) {
    const id = shelving.heldBookId, slot = hit.slot;
    busy = true;
    const group = env.sortingShelves.get(slot.shelfId);
    const at = [...slot.localPosition];
    at[2] += .2;
    await transform(book, group, at, slot.localRotation, .22);
    await transform(book, group, slot.localPosition, slot.localRotation, .16);
    shelving.place(id, slot.shelfId, slot.slotId);
    audio.paper(.018);
    audio.tone(110, .07, .006);
    busy = false;
    if (shelving.isTaskComplete()) {
      gamePhase = 'NIGHT_SHELVING_COMPLETE';
      toast('书都收起来了。', 1400);
    }
    updateUI();
  }
}
function updateNightHover() {
  nightHover = null;
  $('interact').hidden = true;
  $('reticle').hidden = cameraMode === 'OBJECT_INSPECT' || !$('settings').hidden;
  $('reticle').style.left = '50%'; $('reticle').style.top = '50%';
  renderer.domElement.style.cursor = 'default';
  if (!busy && cameraMode === 'FREE_LOOK' && $('settings').hidden) {
    raycaster.setFromCamera(new THREE.Vector2(), camera);
    // Measure reach from the player's hand height so floor books remain reachable while standing.
    const hand = new THREE.Vector3(camera.position.x, .8, camera.position.z);
    const hits = raycaster.intersectObjects(scene.children.filter(o => o !== camera && !Object.values(targets).includes(o)), true);
    for (const hit of hits) {
      let node = hit.object, visible = true, bookId;
      while (node) { visible &&= node.visible; bookId ||= node.userData.shelvingBookId; node = node.parent; }
      if (!visible) continue;
      if (hit.distance > 2.4 || hand.distanceTo(hit.point) > 1.5) break;
      const slot = shelving.slots.find(s => s.slotId === hit.object.userData.slotId);
      if (slot || bookId) nightHover = {slot, bookId, distance: hand.distanceTo(hit.point)};
      // Transparent window panes do not block interactions; solid furniture does.
      if (nightHover || !hit.object.material?.transparent) break;
    }
  }
  const actionable = nightHover && (shelving.heldBookId ? nightHover.slot && !nightHover.slot.occupantBookId : nightHover.bookId || nightHover.slot?.occupantBookId);
  $('reticle').classList.toggle('hot', !!actionable);
}
function damageAtPointer() {
  if (gamePhase !== 'DAY_COUNTER' || !isReturn || tx.phase !== "BOOK_INSPECT" || busy || !$("settings").hidden)
    return null;
  raycaster.setFromCamera(pointer, camera);
  return findBookDamage(book, raycaster, bookPage);
}
async function selectDamage(hotspot) {
  if (!hotspot || !tx.dispatch("SELECT_DAMAGE", hotspot.damageId)) return;
  inspectionSnapshot = {
    rotation: book.rotation.toArray().slice(0, 3),
    quaternion: book.quaternion.toArray(),
    page: bookPage,
  };
  busy = true;
  press = null;
  dragging = false;
  angularX = angularY = 0;
  updateUI();
  audio.paper(0.018);
  selectedHotspot = hotspot;
  // Only translate: preserve the exact inspected orientation, open cover and page.
  const from = book.position.clone(),
    to = bookOpen
      ? new THREE.Vector3(0.78, -0.32, -1.55)
      : new THREE.Vector3(0.55, -0.22, -1.35);
  const normal = new THREE.Vector3(0, 0, 1).transformDirection(
    hotspot.surface.matrixWorld,
  );
  const towardEye = camera
    .getWorldPosition(new THREE.Vector3())
    .sub(damagePoint(hotspot))
    .normalize();
  selectedMinFacing = Math.max(0, normal.dot(towardEye) * 0.85);
  // Stop before a grazing surface would turn away or become occluded.
  const desired = to.clone();
  to.copy(from);
  for (let step = 1; step <= 16; step++) {
    book.position.lerpVectors(from, desired, step / 16);
    if (!damageInView(hotspot, selectedMinFacing)) break;
    to.copy(book.position);
  }
  book.position.copy(from);
  const lightFrom = inspectionLight.position.clone(),
    lightTo = new THREE.Vector3(to.x, 0.18, -0.55);
  await tween(0.4, (t) => {
    book.position.lerpVectors(from, to, smooth(t));
    inspectionLight.position.lerpVectors(lightFrom, lightTo, smooth(t));
  });
  tx.dispatch("BEGIN_DIALOGUE");
  await setCameraMode("DIALOGUE_FOCUS", 0.7, "damage");
  dialogue(
    {
      scratch: "这里的封面为什么有一道划痕？",
      stain: "这一页上的污渍是怎么回事？",
      tear: "这一页怎么破了？",
      corner_fold: "这里为什么折了？",
    }[hotspot.type],
    "你",
  );
  await wait(1.6);
  const reply = visit?.step.damageReplies?.[hotspot.damageId];
  dialogue(reply?.[0] || "啊……这个。");
  await wait(0.5);
  dialogue(reply?.[1] || "可能是不小心碰到哪里了。");
  await wait(1.5);
  if (!reply) dialogue("抱歉。");
  await wait(0.5);
  tx.dispatch("SHOW_DECISION");
  busy = false;
  $("damage-choice").hidden = false;
  $("damage-choice").querySelector("button").focus();
}
function damagePoint(hotspot) {
  book.updateWorldMatrix(true, true);
  const size = hotspot.surface.geometry.parameters;
  return hotspot.surface.localToWorld(
    new THREE.Vector3(
      (hotspot.uv.x - 0.5) * size.width,
      (hotspot.uv.y - 0.5) * size.height,
      0,
    ),
  );
}
function damageInView(hotspot, minimumFacing = 0) {
  if (!hotspot) return false;
  const point = damagePoint(hotspot);
  const origin = camera.getWorldPosition(new THREE.Vector3());
  const facing = new THREE.Vector3(0, 0, 1)
    .transformDirection(hotspot.surface.matrixWorld)
    .dot(origin.clone().sub(point).normalize());
  const ray = new THREE.Raycaster(
    origin,
    point.clone().sub(origin).normalize(),
  );
  const projected = point.clone().project(camera);
  return (
    facing >= minimumFacing &&
    Math.abs(projected.x) < 0.94 &&
    Math.abs(projected.y) < 0.9 &&
    findBookDamage(book, ray, bookPage)?.damageId === hotspot.damageId
  );
}
async function commitReturn(decision) {
  if (busy || !$("settings").hidden || !tx.dispatch(decision.toUpperCase()))
    return;
  busy = true;
  $("damage-choice").hidden = true;
  updateUI();
  if (decision === "charge") {
    dialogue("这属于借阅期间造成的损坏，需要赔偿。", "你");
    await wait(1.8);
    dialogue("好吧，我明白了。");
    audio.paper(0.035);
  } else if (decision === "waive") dialogue("谢谢。");
  if (decision !== "accept") {
    await wait(1.1);
    if (bookOpen) await closeCover();
    await transform(book, camera, heldBookPosition, heldBookRotation);
    inspectionLight.position.set(-0.25, 0.22, 0.12);
    await setCameraMode("COUNTER_FREE", 0.5);
    busy = false;
    updateUI();
    return;
  }
  if (bookOpen) await closeCover();
  await transform(
    book,
    scene,
    [-1.14, 1.155, 0.87],
    [-Math.PI / 2, 0, 0.04],
    0.4,
  );
  inspectionLight.position.set(-0.25, 0.22, 0.12);
  audio.tap();
  tx.dispatch("RESPOND");
  if (decision === "accept") {
    await setCameraMode("DIALOGUE_FOCUS");
    dialogue("谢谢。");
  }
  await wait(1.1);
  await finishVisit();
}
function saveRecord() {
  if (recordSaved || !tx.record) return;
  recordSaved = true;
  try {
    const old = JSON.parse(
      localStorage.getItem("nightfall-transactions") || "[]",
    );
    const records = Array.isArray(old) ? old : [];
    records.push(tx.record);
    localStorage.setItem(
      "nightfall-transactions",
      JSON.stringify(records.slice(-100)),
    );
  } catch {
    toast("本次处理已记录于当前会话；浏览器未允许本地保存。");
  }
  if (DEV_MODE) console.info("Nightfall transaction", tx.record);
}
function allowedTargets() {
  if (busy || !started || !$("settings").hidden || !$("card-choice").hidden)
    return [];
  if (gamePhase === 'CLOSING_READING')
    return cameraMode === 'OBJECT_INSPECT' ? [] : ['personalBook'];
  if (gamePhase !== 'DAY_COUNTER') return [];
  if (tx.phase === "ITEMS_PLACED")
    return isReturn || tx.cardReturned ? ["book"] : ["card", "book"];
  if (tx.phase === "ID_HELD") return ["customer"];
  if (tx.phase === "BOOK_HELD")
    return isReturn
      ? ["return", "bookSlot"]
      : ["scanner", "reject", "bookSlot"];
  return [];
}
const labels = {
  card: "拿起",
  book: "拿起",
  customer: "递还证件",
  bookSlot: "放下",
  scanner: "放到借书机 · 借出",
  reject: "放入暂存盘 · 拒借",
  return: "放入归还托盘 · 收书",
  personalBook: '拿起 / 放下',
};
function updateHover() {
  if (isNight()) return updateNightHover();
  const names = allowedTargets();
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(
    names.map((n) => targets[n]),
    false,
  );
  hover = hits[0]?.object.userData.name || null;
  const x = ((pointer.x + 1) * innerWidth) / 2,
    y = ((1 - pointer.y) * innerHeight) / 2;
  $("reticle").style.left = `${x}px`;
  $("reticle").style.top = `${y}px`;
  $("reticle").classList.toggle("hot", !!hover);
  $("reticle").hidden =
    !started ||
    !$("settings").hidden ||
    interactionPhase().endsWith("INSPECT") ||
    (gamePhase === 'DAY_COUNTER' && tx.phase === "TRANSACTION_COMPLETE");
  $("interact").hidden = !hover;
  if (hover) {
    $("interact").querySelector("span").textContent = hover === 'personalBook' ? (personalHeld ? '放下' : '拿起') : labels[hover];
    $("interact").style.left = `${Math.min(x + 19, innerWidth - 265)}px`;
    $("interact").style.top = `${Math.min(y + 19, innerHeight - 90)}px`;
  }
  renderer.domElement.style.cursor =
    interactionPhase() === "BOOK_INSPECT"
      ? dragging
        ? "grabbing"
        : damageAtPointer()
          ? "pointer"
          : "grab"
      : hover
        ? "pointer"
        : "default";
}
async function interact() {
  if (busy || !hover) return;
  const which = hover;
  if (which === 'personalBook') await (personalHeld ? returnPersonal() : pickupPersonal());
  else if (which === "card" || which === "book") await pickup(which);
  else if (which === "customer") {
    clearTimeout(dialogueTimer);
    $("dialogue").hidden = true;
    $("card-choice").hidden = false;
    $("return-card").focus();
  } else if (which === "bookSlot") await putBack();
  else if (which === "scanner") await commit("borrow");
  else if (which === "reject") await commit("reject");
  else if (which === "return") await commitReturn("accept");
}
function guard(promise) {
  promise.catch((error) => {
    console.error(error);
    busy = false;
    cameraMode =
      tx.phase === "BOOK_INSPECT" ? "OBJECT_INSPECT" : "COUNTER_FREE";
    focusBlend = handPitch = 0;
    toast("操作遇到问题，请刷新后重试。");
  });
}
function updateCardFields() {
  $("card-fields").hidden =
    tx.phase !== "ID_HELD" ||
    busy ||
    !$("settings").hidden ||
    !$("card-choice").hidden;
  if ($("card-fields").hidden) return;
  for (const button of $("card-fields").children) {
    const [x, y, w, h] = cardFields[button.dataset.field];
    const corners = [
      [x, y],
      [x + w, y],
      [x, y + h],
      [x + w, y + h],
    ].map(([u, v]) => {
      const p = card
        .localToWorld(
          new THREE.Vector3((u - 0.5) * 0.396, (0.5 - v) * 0.248, 0.005),
        )
        .project(camera);
      return [((p.x + 1) * innerWidth) / 2, ((1 - p.y) * innerHeight) / 2];
    });
    const xs = corners.map((p) => p[0]),
      ys = corners.map((p) => p[1]);
    Object.assign(button.style, {
      left: `${Math.min(...xs)}px`,
      top: `${Math.min(...ys)}px`,
      width: `${Math.max(...xs) - Math.min(...xs)}px`,
      height: `${Math.max(...ys) - Math.min(...ys)}px`,
    });
  }
}
async function questionCard(field) {
  if (
    busy ||
    tx.phase !== "ID_HELD" ||
    !$("card-choice").hidden ||
    !$("settings").hidden
  )
    return;
  const lines = {
    photo: [
      "这张照片和你现在看起来不太一样。",
      selectedCase === "A"
        ? "是我，照片是前几年拍的。那时头发短一些。"
        : "借阅证上……是以前的照片。我最近换了发型。",
    ],
    name: [
      "请问，证件上的姓名是你的名字吗？",
      `上面写的是${photoProfile.name}。`,
    ],
    date: [
      "这张借阅证的有效期，你确认过吗？",
      "上个月续过期了，有效期印在证件上。",
    ],
  };
  if (!lines[field]) return;
  busy = true;
  await setCameraMode("DIALOGUE_FOCUS");
  dialogue(lines[field][0], "你");
  await wait(1.6);
  dialogue(lines[field][1]);
  await wait(1.4);
  await setCameraMode("COUNTER_FREE", 0.5);
  busy = false;
}
async function returnCard() {
  if (busy || !tx.dispatch("RETURN_ID")) return;
  busy = true;
  $("card-choice").hidden = true;
  updateUI();
  audio.paper();
  await Promise.all([
    setCameraMode("DIALOGUE_FOCUS"),
    armGesture(1, async () => {
      await transform(card, scene, [0.25, 1.2, 0.2], [-0.7, 0, 0], 0.4);
      card.visible = false;
    }),
  ]);
  dialogue("谢谢。");
  await wait(0.65);
  await setCameraMode("COUNTER_FREE", 0.5);
  busy = false;
}
$("card-fields")
  .querySelectorAll("button")
  .forEach((button) =>
    button.addEventListener("click", () =>
      guard(questionCard(button.dataset.field)),
    ),
  );
$("return-card").addEventListener("click", () => guard(returnCard()));
$("keep-card").addEventListener("click", () =>
  guard(
    (async () => {
      if (busy) return;
      busy = true;
      $("card-choice").hidden = true;
      await setCameraMode("DIALOGUE_FOCUS");
      dialogue("嗯，你问吧。");
      await wait(0.8);
      await setCameraMode("COUNTER_FREE", 0.5);
      busy = false;
    })(),
  ),
);
$("settings-open").addEventListener(
  "click",
  () => ($("settings").hidden = false),
);
$("settings-close").addEventListener(
  "click",
  () => { $('settings').hidden = true; if (isNight()) requestLook(); },
);
$("start").addEventListener("click", () => guard(start()));
$("sound").addEventListener("click", () => {
  $("sound").textContent = `声音 · ${audio.toggle() ? "开" : "关"}`;
});
$("ambience-volume").addEventListener("input", (event) =>
  audio.setAmbienceVolume(event.target.value / 100),
);
$("again").addEventListener("click", () => location.reload());
$("case-label").textContent = isReturn ? "练习还书访客" : "练习借书访客";
$("case-label").parentElement.hidden = isMemory || ['closing', 'shelving'].includes(entryMode);
$("complete").querySelector("p").textContent = isReturn
  ? "本次还书处理已记录"
  : "本次借阅处理已记录";
document.querySelectorAll("[data-mode]").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(
      button.dataset.mode ===
        (entryMode || 'borrow'),
    ),
  );
  button.addEventListener("click", () => {
    query.set("mode", button.dataset.mode);
    location.search = query.toString();
  });
});
document
  .querySelectorAll("[data-decision]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      guard(commitReturn(button.dataset.decision)),
    ),
  );
document.querySelectorAll("[data-case]").forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.case === selectedCase),
  );
  button.addEventListener("click", () => {
    if (button.dataset.case === selectedCase) return;
    query.set("case", button.dataset.case);
    location.search = query.toString();
  });
});
window.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  // IMEs may report "Process" as key while preserving the physical key code.
  const key = event.code === "KeyR" ? "r" : event.key.toLowerCase();
  if (isNight() && $('settings').hidden && document.pointerLockElement === renderer.domElement &&
      ['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
    keys.add(event.code); event.preventDefault();
  }
  if (!$("settings").hidden) {
    if (key === "escape") {
      $("settings").hidden = true;
      event.preventDefault();
    }
    return;
  }
  if (
    !started ||
    busy ||
    event.repeat ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)
  )
    return;
  if (["r", "escape"].includes(key)) event.preventDefault();
  if (key === "escape") {
    keys.clear();
    if (document.pointerLockElement) document.exitPointerLock();
    if (!$("card-choice").hidden) $("card-choice").hidden = true;
    else $("settings").hidden = false;
    dragging = false;
    press = null;
    angularX = angularY = 0;
  }
  if (key === "r" && $("card-choice").hidden)
    guard(interactionPhase() === "BOOK_INSPECT" ? exitInspect() : inspectAgain());
});
window.addEventListener('keyup', event => keys.delete(event.code));
function requestLook() {
  renderer.domElement.requestPointerLock()?.catch(() => toast('点击画面继续环顾。'));
}
document.addEventListener('pointerlockchange', () => {
  keys.clear(); press = null; dragging = false; angularX = angularY = 0;
  if (isNight() && !document.pointerLockElement && started) $('settings').hidden = false;
});
window.addEventListener("pointermove", (event) => {
  if (!$("settings").hidden || !$("card-choice").hidden) return;
  if (isNight()) {
    if (document.pointerLockElement !== renderer.domElement || busy) return;
    if (cameraMode === 'OBJECT_INSPECT') {
      if (press && (event.movementX || event.movementY)) {
        dragging = true;
        angularY = event.movementX * .005; angularX = event.movementY * .005;
        book.rotateY(angularY); book.rotateX(angularX);
      }
    } else if (cameraMode === 'FREE_LOOK') {
      camera.rotation.y -= event.movementX * .002;
      camera.rotation.x = THREE.MathUtils.clamp(camera.rotation.x - event.movementY * .002, -1.35, 1.25);
    }
    return;
  }
  pointer.set(
    (event.clientX / innerWidth) * 2 - 1,
    1 - (event.clientY / innerHeight) * 2,
  );
  if (interactionPhase() === "BOOK_INSPECT") {
    if (press && !busy) {
      const distance = Math.hypot(
        event.clientX - press.x,
        event.clientY - press.y,
      );
      if (
        distance > CLICK_MOVE_THRESHOLD ||
        (distance > 0 && performance.now() - press.time > CLICK_TIME_THRESHOLD)
      )
        dragging = true;
    }
    if (dragging && !busy) {
      angularY = (event.clientX - lastX) * 0.005;
      angularX = (event.clientY - lastY) * 0.005;
      book.rotateY(angularY);
      book.rotateX(angularX);
    }
  } else {
    targetYaw = -pointer.x * MAX_YAW;
    targetPitch = pointer.y * MAX_PITCH;
  }
  lastX = event.clientX;
  lastY = event.clientY;
});
renderer.domElement.addEventListener("pointerdown", (event) => {
  if (!$("settings").hidden || !$("card-choice").hidden) return;
  if (event.button !== 0) return;
  if (isNight() && document.pointerLockElement !== renderer.domElement) { requestLook(); return; }
  if (interactionPhase() === "BOOK_INSPECT" && !busy) {
    pointer.set(
      (event.clientX / innerWidth) * 2 - 1,
      1 - (event.clientY / innerHeight) * 2,
    );
    press = {
      x: event.clientX,
      y: event.clientY,
      time: performance.now(),
      pointerId: event.pointerId,
      damageId: damageAtPointer()?.damageId,
    };
    dragging = false;
    angularX = angularY = 0;
    lastX = event.clientX;
    lastY = event.clientY;
    if (!isNight()) renderer.domElement.setPointerCapture(event.pointerId);
  } else {
    if (isNight()) { updateNightHover(); guard(nightInteract()); return; }
    pointer.set(
      (event.clientX / innerWidth) * 2 - 1,
      1 - (event.clientY / innerHeight) * 2,
    );
    updateHover();
    guard(interact());
  }
});
renderer.domElement.addEventListener(
  "wheel",
  (event) => {
    if (interactionPhase() !== "BOOK_INSPECT" || !$("settings").hidden) return;
    event.preventDefault();
    if (event.deltaY) guard(flip(Math.sign(event.deltaY)));
  },
  { passive: false },
);
window.addEventListener("pointerup", (event) => {
  if (
    press &&
    press.pointerId === event.pointerId &&
    !dragging &&
    performance.now() - press.time <= CLICK_TIME_THRESHOLD &&
    Math.hypot(event.clientX - press.x, event.clientY - press.y) <=
      CLICK_MOVE_THRESHOLD
  ) {
    pointer.set(
      (event.clientX / innerWidth) * 2 - 1,
      1 - (event.clientY / innerHeight) * 2,
    );
    const hotspot = damageAtPointer();
    if (hotspot && hotspot.damageId === press.damageId)
      guard(selectDamage(hotspot));
  }
  press = null;
  dragging = false;
});
window.addEventListener("pointercancel", () => {
  press = null;
  dragging = false;
  angularX = angularY = 0;
});
window.addEventListener("blur", () => {
  keys.clear();
  press = null;
  dragging = false;
  angularX = angularY = 0;
});
window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
});
// Read-only diagnostics are opt-in. Tests operate through actual keyboard/pointer input.
if (DEV_MODE) {
  $("dev-panel").hidden = false;
  window.library = {
    get night() {
      return structuredClone({ gamePhase, cameraMode, position: camera.position.toArray(),
        yaw: camera.rotation.y, pitch: camera.rotation.x, pointerLocked: !!document.pointerLockElement,
        heldBookId: shelving.heldBookId, heldCategory: shelving.books.get(shelving.heldBookId)?.category,
        hoveredSlot: nightHover?.slot, hoveredBook: nightHover?.bookId, distance: nightHover?.distance,
        pending: shelving.getPendingBooks(), result: shelving.result,
        slots: shelving.slots, books: [...shelving.books.values()],
        time: reading.time, page: reading.page, dwell: reading.dwell, advances: reading.advances,
        closingReady: reading.ready, closed: env.closed, personalHeld,
      });
    },
    nightPosition(id) {
      const object = nightWorld.books.get(id) || nightWorld.slotTargets.find(o => o.userData.slotId === id);
      return object?.getWorldPosition(new THREE.Vector3()).toArray();
    },
    get state() {
      return tx.state;
    },
    get busy() {
      return busy;
    },
    get checklist() {
      return tx.checklist;
    },
    get record() {
      return tx.record;
    },
    get bookOpen() {
      return bookOpen;
    },
    get bookPage() {
      return bookPage;
    },
    get cardReturned() {
      return tx.cardReturned;
    },
    get bookRotation() {
      return book.rotation.toArray().slice(0, 3);
    },
    get bookQuaternion() {
      return book.quaternion.toArray();
    },
    get damageDecisions() {
      return structuredClone(tx.damageDecisions);
    },
    get memory() {
      if (!sequence) return null;
      return structuredClone({
        index: sequence.index,
        completed: sequence.records.length,
        book: visit.book,
        books: [...sequence.books.values()],
        profile: personProfile,
        photoProfile,
        meshId: book.uuid,
        personId: person.uuid,
      });
    },
    get selectedDamageVisible() {
      return damageInView(selectedHotspot, selectedMinFacing);
    },
    get inspectionSnapshot() {
      return inspectionSnapshot && structuredClone(inspectionSnapshot);
    },
    projectDamage(id) {
      const h = book.userData.damageHotspots.find(
        (h) => h.damageId === id && h.page === bookPage && h.enabled,
      );
      if (!h) return null;
      const [u, v, w, height] = h.uvRect,
        size = h.surface.geometry.parameters;
      const p = h.surface
        .localToWorld(
          new THREE.Vector3(
            (u + w / 2 - 0.5) * size.width,
            (0.5 - v - height / 2) * size.height,
            0,
          ),
        )
        .project(camera);
      return {
        x: ((p.x + 1) * innerWidth) / 2,
        y: ((1 - p.y) * innerHeight) / 2,
      };
    },
    project(name) {
      const object = targets[name];
      if (!object) return null;
      const p = object.getWorldPosition(new THREE.Vector3()).project(camera);
      return {
        x: ((p.x + 1) * innerWidth) / 2,
        y: ((1 - p.y) * innerHeight) / 2,
      };
    },
    get cameraAngles() {
      return { yaw: currentYaw, pitch: currentPitch };
    },
    get cameraShot() {
      return {
        mode: cameraMode,
        beat: cameraBeat,
        blend: focusBlend,
        handPitch,
        fov: camera.fov,
        z: camera.position.z,
      };
    },
    get drawCalls() {
      return renderer.info.render.calls;
    },
  };
}
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;
  time += dt;
  for (let i = animations.length - 1; i >= 0; i--) {
    const a = animations[i];
    a.elapsed += dt;
    const t = Math.min(a.elapsed / a.duration, 1);
    a.update(t);
    if (t >= 1) {
      animations.splice(i, 1);
      a.resolve();
    }
  }
  env.update(dt, time);
  if (started && time > nextPaper) {
    if (!busy) audio.paper(0.009);
    nextPaper = time + 37;
  }
  if (started && time > nextWood) {
    if (!busy) audio.tone(134, 0.12, 0.008);
    nextWood = time + 53;
  }
  if (!isNight() && gamePhase !== 'CLOSING_TRANSITION' && cameraMode !== "OBJECT_INSPECT") {
    const follow = 1 - Math.exp(-8 * dt);
    const dialogueYaw =
      focusYaw +
      THREE.MathUtils.clamp(
        targetYaw * 0.6,
        -THREE.MathUtils.degToRad(2.5),
        THREE.MathUtils.degToRad(2.5),
      );
    const dialoguePitch =
      focusPitch +
      handPitch +
      THREE.MathUtils.clamp(
        targetPitch * 0.6,
        -THREE.MathUtils.degToRad(2),
        THREE.MathUtils.degToRad(2),
      );
    currentYaw = THREE.MathUtils.lerp(
      currentYaw,
      THREE.MathUtils.lerp(targetYaw, dialogueYaw, focusBlend),
      follow,
    );
    currentPitch = THREE.MathUtils.lerp(
      currentPitch,
      THREE.MathUtils.lerp(targetPitch, dialoguePitch, focusBlend),
      follow,
    );
    camera.rotation.y = currentYaw;
    camera.rotation.x = -0.12 + currentPitch;
  }
  const fov = 67 - 5 * focusBlend;
  if (camera.fov !== fov) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
  if (!isNight() && gamePhase !== 'CLOSING_TRANSITION') {
    camera.position.z = 2.64 - 0.03 * focusBlend;
    camera.position.y = 1.67 + Math.sin(time * 0.8) * 0.0009;
  }
  if (gamePhase === 'CLOSING_READING') {
    const page = cameraMode === 'OBJECT_INSPECT' && !busy && $('settings').hidden && !dragging ? bookPage : 0;
    if (reading.update(page, dt)) {
      const clock = document.querySelector('.clock');
      clock.textContent = reading.time;
      clock.animate([{opacity: .3}, {opacity: 1}], {duration: 600});
      env.setReadingProgress(reading.advances / 4);
      if (reading.ready) toast('已经到闭馆时间了。');
    }
  }
  if (isNight()) {
    if (gamePhase === 'NIGHT_FREE_ROAM' && shelving.getPendingBooks().length) gamePhase = 'NIGHT_SHELVING';
    if (!busy && cameraMode === 'FREE_LOOK' && $('settings').hidden && document.pointerLockElement) {
      const forward = Number(keys.has('KeyW')) - Number(keys.has('KeyS'));
      const sideways = Number(keys.has('KeyD')) - Number(keys.has('KeyA'));
      const moving = moveWalker(camera.position, camera.rotation.y, forward, sideways, dt);
      if (moving && time > nextFootstep) {
        audio.tone(115, .09, .014);
        audio.paper(.006);
        nextFootstep = time + .57;
      }
      if (moving && shelving.heldBookId) book.position.y = heldBookPosition[1] + Math.sin(time * 6) * .003;
    }
  }
  if (person.visible) {
    person.userData.body.position.y = Math.sin(time * 1.3) * 0.004;
    if (!busy) {
      person.userData.head.rotation.z = Math.sin(time * 0.55) * 0.018;
      person.userData.body.rotation.z = Math.sin(time * 0.64) * 0.006;
    }
    const blink = time % 4.8;
    const sy = blink > 4.6 && blink < 4.75 ? 0.1 : 1;
    person.userData.eyes.forEach((eye) => (eye.scale.y = sy));
  }
  if (
    interactionPhase() === "BOOK_INSPECT" &&
    !dragging &&
    !press &&
    !busy &&
    $("settings").hidden
  ) {
    book.rotateY(angularY * dt * 45);
    book.rotateX(angularX * dt * 45);
    const decay = Math.exp(-8 * dt);
    angularY *= decay;
    angularX *= decay;
  }
  grain.uniforms.uTime.value = time;
  scene.updateMatrixWorld();
  updateCardFields();
  updateHover();
  composer.render();
  if (DEV_MODE)
    $("dev-panel").textContent =
      `DEV · ${tx.type} ${selectedCase}\n${tx.state}\n` +
      (isReturn
        ? `损坏: ${tx.record?.actualDamagePresent ?? "—"}\n责任: ${tx.record?.actualDamageResponsibility ?? "—"}`
        : `身份: ${tx.actualIdentityMatch ? "MATCH" : "MISMATCH"}\n勾选: ${tx.checklist ?? "NULL"}`) +
      `\n操作: ${tx.decision ?? "—"}\n正确: ${tx.record?.isCorrect ?? "—"}` +
      (sequence
        ? `\n交易: ${daySequence.indexOf(visit.step) + 1} / 3\n副本: ${visit.book.instanceId}\n持有人: ${visit.book.holderCustomerId ?? "—"}\n损坏: ${visit.book.damages.map((d) => d.id + ":" + d.createdAt).join(", ")}\n决定: ${JSON.stringify(tx.damageDecisions)}`
        : "");
  if (DEV_MODE && gamePhase !== 'DAY_COUNTER')
    $('dev-panel').textContent = `${gamePhase} / ${cameraMode}\n${reading.time} · page ${bookPage} · dwell ${reading.dwell.toFixed(1)} · advances ${reading.advances} · ready ${reading.ready}\nheld ${shelving.heldBookId || '—'} / ${shelving.books.get(shelving.heldBookId)?.category || '—'}\nslot ${nightHover?.slot?.slotId || '—'} · occupied ${nightHover?.slot?.occupantBookId || '—'}\npending ${shelving.getPendingBooks().length} · correct ${shelving.getFinalLayout().filter(p => p.isCorrect).length} · wrong ${shelving.getFinalLayout().filter(p => !p.isCorrect).length}\nposition ${camera.position.toArray().map(n => n.toFixed(2)).join(', ')} · reach ${nightHover?.distance?.toFixed(2) || '—'}`;
}
requestAnimationFrame(frame);
