import * as THREE from 'three';
import { makePerson, profiles } from './assets.js';

export const recommendationRequest = {
  id: 'night_request_01', visitorId: 'chen_yao',
  requiredTags: ['astronomy', 'beginner', 'illustrated'],
  acceptableBookIds: ['book_night_sky_guide_001'],
};
const visitor = {
  name: '陈遥',
  profile: {...profiles.A, id: 'chen_yao', name: '陈遥', hairStyle: 'short',
    hairColor: '#242a2c', shirtColor: '#27373e', scarfColor: '#465150'},
  outsidePath: [[6, 0, -5.6], [2.85, 0, -5.6], [2.85, 0, -4.9]],
  lines: [['陈遥', '不好意思。'], ['陈遥', '我知道已经关门了。'],
    ['陈遥', '我想明天来借一本书……能不能先请你帮我推荐一本？'],
    ['你', '你想找什么样的？'], ['陈遥', '是给我妹妹看的。'],
    ['陈遥', '她最近总问我天上的星星为什么会亮。'], ['陈遥', '最好图多一点，别太难。'],
    ['你', '等一下，我找找看。']],
};

export class NightRecommendationController {
  phase = null;
  visitorState = 'ABSENT';
  result = null;
  asked = false;
  constructor(shelves, request = recommendationRequest) {
    this.shelves = shelves;
    this.request = structuredClone(request);
  }
  startWaiting() {
    if (this.phase) return false;
    this.phase = 'NIGHT_RECOMMENDATION_WAIT';
    return true;
  }
  spawnVisitor() {
    if (this.phase !== 'NIGHT_RECOMMENDATION_WAIT' || this.visitorState !== 'ABSENT') return false;
    this.visitorState = 'APPROACHING';
    return true;
  }
  startRequest() {
    if (!['WAITING', 'SEARCHING'].includes(this.visitorState) || this.result || (this.asked && this.shelves.heldBookId)) return false;
    this.visitorState = 'TALKING';
    this.phase = 'NIGHT_RECOMMENDATION_REQUEST';
    this.asked = true;
    return true;
  }
  finishRequest() {
    this.visitorState = 'SEARCHING';
    this.phase = 'NIGHT_RECOMMENDATION_SEARCH';
  }
  getCurrentRequest() { return structuredClone(this.request); }
  canPresent(id) {
    return this.visitorState === 'SEARCHING' && !this.result && !!id &&
      this.shelves.heldBookId === id && this.shelves.books.has(id);
  }
  submitRecommendation(id) {
    if (!this.canPresent(id)) return false;
    this.result = {requestId: this.request.id, visitorId: this.request.visitorId,
      recommendedBookId: id, acceptableBookIds: [...this.request.acceptableBookIds],
      isCorrect: this.request.acceptableBookIds.includes(id), presentedAt: new Date().toISOString(), visitorExitedAt: null};
    this.visitorState = 'RESPONDING';
    this.phase = 'NIGHT_RECOMMENDATION_PRESENT';
    return true;
  }
  markVisitorExited() {
    if (!this.result || this.result.visitorExitedAt) return false;
    this.visitorState = 'EXITED';
    this.result.visitorExitedAt = new Date().toISOString();
    return true;
  }
  get recommendedBookReshelved() {
    return !!this.result && this.shelves.getBookLocation(this.result.recommendedBookId)?.type === 'shelf';
  }
  getResult() { return structuredClone(this.result); }
  isComplete() {
    return !!this.result?.visitorExitedAt && this.recommendedBookReshelved && !this.shelves.heldBookId;
  }
}

// The event owns its visitor and performance; the host supplies the existing camera, sound and input services.
export function buildNightRecommendation(scene, controller, {camera, audio, tween, wait, dialogue, focus, lockInput, run}) {
  const actor = makePerson(visitor.profile);
  actor.visible = false;
  actor.userData.recommendationVisitor = true;
  actor.position.fromArray(visitor.outsidePath[0]);
  scene.add(actor);
  const light = new THREE.PointLight('#9eb8d1', 1.4, 3, 2);
  light.position.set(2.65, 2.5, -4.65);
  light.visible = false;
  scene.add(light);
  let quiet = 0, moving = false, nextStep = 0, knocks = 0;
  const smooth = t => t * t * (3 - 2 * t);
  async function walkTo(at, duration) {
    moving = true;
    const from = actor.position.clone();
    await tween(duration, t => actor.position.lerpVectors(from, new THREE.Vector3(...at), t));
    moving = false;
  }
  async function arrive() {
    actor.visible = light.visible = true;
    actor.rotation.y = -Math.PI / 2;
    await walkTo(visitor.outsidePath[1], 4);
    await tween(.5, t => actor.rotation.y = -Math.PI / 2 * (1 - smooth(t)));
    await walkTo(visitor.outsidePath[2], 1);
    controller.visitorState = 'KNOCKING';
    const arm = actor.userData.arms[1];
    await tween(.35, t => arm.rotation.x = -1.2 * smooth(t));
    for (let i = 0; i < 3; i++) {
      knocks++;
      const volume = .016 / (1 + camera.position.distanceTo(actor.position) * .2);
      audio.tone(165, .11, volume);
      await tween(.16, t => arm.rotation.x = -1.2 - Math.sin(t * Math.PI) * .13);
      await wait(.33);
    }
    await tween(.35, t => arm.rotation.x = -1.2 * (1 - smooth(t)));
    controller.visitorState = 'WAITING';
  }
  async function say(lines) {
    for (const [speaker, line] of lines) {
      const duration = Math.max(1.5, line.length * .105);
      dialogue(line, speaker, duration);
      await wait(duration + .4);
    }
  }
  async function depart() {
    controller.visitorState = 'LEAVING';
    await tween(.6, t => actor.userData.head.rotation.x = Math.sin(t * Math.PI) * .12);
    await walkTo([2.85, 0, -5.6], 1);
    await tween(.6, t => actor.rotation.y = Math.PI / 2 * smooth(t));
    await walkTo(visitor.outsidePath[0], 4);
    actor.visible = light.visible = false;
    controller.markVisitorExited();
  }
  function canInteract() {
    if (Math.hypot(camera.position.x - actor.position.x, camera.position.z - actor.position.z) > 1.9) return false;
    if (controller.visitorState === 'WAITING' && !controller.asked) return true;
    return controller.shelves.heldBookId ? controller.canPresent(controller.shelves.heldBookId) :
      ['WAITING', 'SEARCHING'].includes(controller.visitorState) && !controller.result;
  }
  async function interact() {
    if (!canInteract()) return;
    const repeat = controller.asked, id = repeat ? controller.shelves.heldBookId : null;
    if (!(id ? controller.submitRecommendation(id) : controller.startRequest())) return;
    lockInput(true);
    await focus('DIALOGUE_FOCUS', actor);
    if (id) {
      audio.paper(.014);
      await wait(.6);
      await say(controller.result.isCorrect ? [['陈遥', '这个好像正合适。'], ['陈遥', '谢谢。那我明天再来借。']] :
        [['陈遥', '嗯……好像不是我想找的那种。'], ['陈遥', '不过还是谢谢你。']]);
    } else {
      await say(repeat ? [['陈遥', '就是给小孩子看的星空书，图多一点、别太难。']] : visitor.lines);
    }
    await focus('FREE_LOOK', actor);
    lockInput(false);
    if (id) run(depart()); else controller.finishRequest();
  }
  function update(dt, time) {
    if (!controller.phase) return;
    if (controller.visitorState === 'ABSENT') {
      quiet += dt;
      if (quiet >= 5.5 && controller.spawnVisitor()) run(arrive());
    }
    if (controller.isComplete()) controller.phase = 'NIGHT_RECOMMENDATION_COMPLETE';
    if (!actor.visible) return;
    actor.userData.body.position.y = Math.sin(time * 1.15) * .003;
    actor.userData.legs.forEach((leg, i) => leg.rotation.x = moving ? Math.sin(time * 6 + i * Math.PI) * .2 : 0);
    if (['WAITING', 'SEARCHING'].includes(controller.visitorState)) {
      actor.userData.head.rotation.y = Math.sin(time * .25) * .26;
      actor.userData.body.rotation.z = Math.sin(time * .7) * .006;
    } else actor.userData.head.rotation.y *= Math.exp(-dt * 5);
    if (moving && time > nextStep) {
      audio.tone(105, .09, .005 / (1 + camera.position.distanceTo(actor.position)));
      nextStep = time + .65;
    }
  }
  return {actor, update, interact, canInteract,
    get label() { return controller.asked && controller.shelves.heldBookId ? '推荐这本' : '询问'; },
    get diagnostics() { return {visitorState: controller.visitorState, position: actor.position.toArray(),
      visible: actor.visible, quiet, knocks, request: controller.getCurrentRequest(), result: controller.getResult(),
      recommendedBookReshelved: controller.recommendedBookReshelved}; }};
}
