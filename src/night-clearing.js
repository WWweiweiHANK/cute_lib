import * as THREE from 'three';
import { makePerson, profiles, box, material } from './assets.js';
import { canWalk } from './night-world.js';

const visitors = [
  {id: 'elder', type: 'elder', name: '老人', position: [-1.82, 0, -2.15], yaw: -Math.PI / 2,
    standAt: [-1.28, 0, -2.15], route: [[-1.28, -1.5], [2.85, -1.5], [2.85, -3.55]],
    reminder: '您好，已经闭馆了。', lines: ['啊……已经这么晚了。', '不好意思，我这就走。']},
  {id: 'headphones', type: 'headphones', name: '年轻读者', position: [-.55, 0, -3.45], yaw: .25,
    standAt: [-.55, 0, -2.95], route: [[1.6, -2.95], [2.85, -3.55]],
    reminder: '不好意思，图书馆已经闭馆了。', lines: ['啊？已经关门了吗？', '抱歉，我没注意时间。']},
  {id: 'child', type: 'child', name: '小孩', position: [-4.2, 0, -.05], yaw: Math.PI / 2,
    standAt: [-4.2, 0, -.05], route: [[-3.08, -.05], [-3.08, -.8], [2.85, -.8], [2.85, -3.55]],
    reminder: '已经闭馆了，该回家了。', lines: ['我再看最后一页。', '好吧。']},
];

export class NightClearingController {
  active = false;
  dialogueTarget = null;
  exitApproach = null;
  talkDistance = 1.8;
  constructor() {
    this.visitors = structuredClone(visitors).map(v => ({...v, state: 'LINGERING',
      hasBeenNoticed: false, hasBeenAskedToLeave: false, hasExited: false,
      hasStood: false, standProgress: 0, routeIndex: 0, atDoor: false}));
  }
  getVisitor(id) { return this.visitors.find(v => v.id === id); }
  getLingeringVisitors() { return this.visitors.filter(v => !v.hasExited); }
  canTalkTo(id, p) {
    const v = this.getVisitor(id);
    return !!(this.active && !this.dialogueTarget && v?.state === 'LINGERING' &&
      Math.hypot(v.position[0] - p.x, v.position[2] - p.z) <= this.talkDistance);
  }
  notice(id) {
    const v = this.getVisitor(id);
    if (!this.active || !v || v.state !== 'LINGERING' || v.hasBeenNoticed) return false;
    v.hasBeenNoticed = true;
    if (v.type === 'child') v.hasStood = true;
    return true;
  }
  startLeaveSequence(id, p) {
    if (!this.canTalkTo(id, p)) return false;
    this.notice(id);
    const v = this.getVisitor(id);
    v.hasBeenAskedToLeave = true;
    v.state = 'DIALOGUE';
    this.dialogueTarget = id;
    return true;
  }
  prepare(id) {
    const v = this.getVisitor(id);
    if (v?.state !== 'DIALOGUE') return false;
    v.state = 'PREPARING_TO_LEAVE';
    v.hasStood = true;
    return true;
  }
  leave(id) {
    const v = this.getVisitor(id);
    if (v?.state !== 'PREPARING_TO_LEAVE') return false;
    v.state = 'LEAVING';
    this.dialogueTarget = null;
    return true;
  }
  markExited(id) {
    const v = this.getVisitor(id);
    if (v?.state !== 'LEAVING' || !v.atDoor) return false;
    v.hasExited = true;
    v.state = 'EXITED';
    if (this.exitApproach === id) this.exitApproach = null;
    return true;
  }
  isCleared() { return this.active && this.visitors.every(v => v.hasExited); }
  blocksPlayer(x, z) {
    return this.visitors.some(v => !v.hasExited && Math.hypot(v.position[0] - x, v.position[2] - z) < .44);
  }
  standPosition(id, player) {
    const v = this.getVisitor(id), [x, , z] = v.standAt;
    return [v.standAt, [x, 0, z - .9], [x, 0, z + .9], [x + 1, 0, z], [x - 1, 0, z]]
      .find(p => {
        if (!canWalk(p[0], p[2])) return false;
        const dx = p[0] - v.position[0], dz = p[2] - v.position[2];
        const t = Math.max(0, Math.min(1, ((player.x - v.position[0]) * dx +
          (player.z - v.position[2]) * dz) / (dx * dx + dz * dz || 1)));
        return Math.hypot(v.position[0] + t * dx - player.x, v.position[2] + t * dz - player.z) >= .44;
      }) || [...v.position];
  }
  update(dt, player) {
    for (const v of this.visitors) {
      if (v.hasStood) v.standProgress = Math.min(1, v.standProgress + dt / .65);
      if (v.state !== 'LEAVING' || v.atDoor) continue;
      // ponytail: three readers share one exit lane; reserve before either crossing segment.
      if (v.routeIndex >= v.route.length - 2) {
        if (this.exitApproach && this.exitApproach !== v.id) continue;
        this.exitApproach = v.id;
      }
      const [x, z] = v.route[v.routeIndex], dx = x - v.position[0], dz = z - v.position[2];
      const distance = Math.hypot(dx, dz), step = Math.min(distance, dt * (v.type === 'elder' ? .65 : .85));
      if (distance > .001) {
        const nx = v.position[0] + dx / distance * step, nz = v.position[2] + dz / distance * step;
        if (Math.hypot(nx - player.x, nz - player.z) < .48 || this.visitors.some(other =>
          other !== v && !other.hasExited && Math.hypot(nx - other.position[0], nz - other.position[2]) < .5)) continue;
        v.position[0] = nx; v.position[2] = nz;
        const target = Math.atan2(dx, dz);
        v.yaw += Math.atan2(Math.sin(target - v.yaw), Math.cos(target - v.yaw)) * Math.min(1, dt * 6);
      }
      if (distance <= step + .001 && ++v.routeIndex === v.route.length) v.atDoor = true;
    }
  }
}

export function buildClearingVisitors(scene, controller) {
  const group = new THREE.Group(), models = new Map();
  group.visible = false;
  scene.add(group);
  const paper = material('#b9ad8e'), cover = material('#45534a'), wood = material('#403a2d');
  const stool = box(group, [.42, .08, .42], [-.55, .43, -3.45], wood);
  for (const dx of [-.15, .15]) for (const dz of [-.15, .15])
    box(group, [.045, .42, .045], [-.55 + dx, .21, -3.45 + dz], wood);
  box(group, [.035, 1.5, .035], [-1, .75, -3.55], wood);
  box(group, [.35, .045, .18], [-.89, 1.5, -3.55], material('#56624e'));
  box(group, [.29, .01, .14], [-.89, 1.472, -3.55], material('#c4b68c', {emissive: '#bda56e', emissiveIntensity: .4}));
  const readingLight = new THREE.PointLight('#e9c99e', .8, 2.3, 2);
  readingLight.position.set(-.78, 1.4, -3.45);
  group.add(readingLight);
  for (const v of controller.visitors) {
    const profile = {...profiles.A, id: v.id, name: v.name, hairStyle: 'short',
      hairColor: v.type === 'elder' ? '#8f8b7d' : '#302b25',
      glasses: v.type === 'elder', shirtColor: v.type === 'child' ? '#675640' : v.type === 'elder' ? '#575348' : '#3b5058',
      scarfColor: '#746957'};
    const model = makePerson(profile);
    model.userData.clearingVisitorId = v.id;
    if (v.type === 'child') model.scale.setScalar(.6);
    const seatedLegs = new THREE.Group();
    model.add(seatedLegs);
    for (const side of [-1, 1]) {
      box(seatedLegs, [.17, .18, .43], [side * .14, .47, .15], wood);
      box(seatedLegs, [.16, .4, .18], [side * .14, .25, .29], wood);
    }
    const readingBook = new THREE.Group();
    box(readingBook, [.36, .045, .26], [0, 0, 0], cover);
    box(readingBook, [.33, .018, .24], [0, .03, 0], paper);
    const leaf = box(readingBook, [.17, .008, .24], [-.085, .045, 0], cover);
    model.userData.body.add(readingBook);
    readingBook.position.set(0, .94, .36);
    readingBook.rotation.x = -.15;
    let earCup;
    if (v.type === 'headphones') {
      const headphones = new THREE.Group();
      model.userData.head.add(headphones);
      const dark = material('#242b2b');
      box(headphones, [.59, .055, .08], [0, .32, 0], dark);
      for (const side of [-1, 1]) {
        box(headphones, [.055, .25, .08], [side * .28, .2, 0], dark);
        const cup = box(headphones, [.09, .19, .16], [side * .29, .025, 0], dark);
        if (side === 1) earCup = cup;
      }
    }
    group.add(model);
    models.set(v.id, {model, seatedLegs, readingBook, leaf, earCup});
  }
  function update(dt, time) {
    for (const v of controller.visitors) {
      const {model, seatedLegs, readingBook, leaf, earCup} = models.get(v.id);
      model.visible = !v.hasExited;
      model.position.fromArray(v.position);
      model.rotation.y = v.yaw;
      const s = v.standProgress, sitting = s < 1, data = model.userData;
      for (const child of model.children) if (child !== data.body && child !== seatedLegs) child.visible = !sitting;
      seatedLegs.visible = sitting;
      data.body.position.y = -(v.type === 'child' ? .65 : .43) * (1 - s) + Math.sin(time * 1.15) * .003;
      data.body.rotation.x = (v.type === 'elder' && v.state === 'LINGERING' ? .13 : .02) * (1 - s);
      const headTarget = v.state === 'LINGERING' ? .3 : 0;
      data.head.rotation.x += (headTarget - data.head.rotation.x) * Math.min(1, dt * 2);
      data.arms.forEach((arm, i) => {
        arm.rotation.x = v.state === 'LEAVING' ? Math.sin(time * 5 + i * Math.PI) * .14 : -.65 * (1 - s);
      });
      data.legs.forEach((leg, i) => leg.rotation.x = v.state === 'LEAVING' && !v.atDoor ? Math.sin(time * 5 + i * Math.PI) * .22 : 0);
      // The book folds, then remains visibly carried at the reader's side.
      leaf.rotation.z = Math.PI * (1 - s);
      const bookHeight = v.type === 'elder' ? 1.26 : .94;
      readingBook.position.set(.3 * s, bookHeight + (.86 - bookHeight) * s, .36 - .32 * s);
      readingBook.rotation.x = -.15 + 1.5 * s;
      if (earCup) earCup.position.y = .025 - .2 * s;
      data.eyes.forEach(eye => eye.scale.y = v.type === 'elder' && v.state === 'LINGERING' ? .15 : 1);
    }
  }
  update(1, 0);
  return {group, models, stool, update};
}
