import * as THREE from 'three';
import { makeBook, box } from './assets.js';
import { shelfCategories, shelvingDefinitions } from './night-shelving.js';

// Static furniture only; horizontal circle/AABB sliding is sufficient for this one-floor room.
export const walkObstacles = [
  [-2.725, 2.725, .4, 2.22], // counter
  [-3.26, -1.84, -2.84, -2.06], // reading table
  [-3.55, -3.15, -2.5, -1.95], [-2.02, -1.62, -2.5, -1.95], // chairs
  [-.76, -.34, -3.66, -3.24], // window reading stool
  [-3.7, -3.2, -3.8, -3.3], [3.23, 3.73, -3.75, -3.25], // plants
  ...shelfCategories.map(c => [c.position[0] - .88, c.position[0] + .88, c.position[2] - .24, c.position[2] + .3]),
];
export function canWalk(x, z) {
  const r = .21;
  return x > -5.05 + r && x < 5.05 - r && z > -4.05 + r && z < 3.8 - r &&
    !walkObstacles.some(([left, right, back, front]) =>
      x > left - r && x < right + r && z > back - r && z < front + r);
}
export function moveWalker(position, yaw, forward, sideways, dt, blocked = () => false) {
  const length = Math.hypot(forward, sideways);
  if (!length) return false;
  const speed = 1.45 * Math.min(dt, .05) / length;
  const dx = (Math.cos(yaw) * sideways - Math.sin(yaw) * forward) * speed;
  const dz = (-Math.cos(yaw) * forward - Math.sin(yaw) * sideways) * speed;
  const oldX = position.x, oldZ = position.z;
  if (canWalk(position.x + dx, position.z) && !blocked(position.x + dx, position.z)) position.x += dx;
  if (canWalk(position.x, position.z + dz) && !blocked(position.x, position.z + dz)) position.z += dz;
  return position.x !== oldX || position.z !== oldZ;
}

export function buildShelvingWorld(scene, shelves, controller) {
  const books = new Map(), slotTargets = [];
  const proxy = new THREE.MeshBasicMaterial({transparent: true, opacity: 0, depthWrite: false});
  for (const slot of controller.slots) {
    const group = shelves.get(slot.shelfId);
    // Aim at the actual gap, including its height and left/right position.
    const target = box(group, [.43, .75, .02], [slot.localPosition[0], slot.localPosition[1] + .08, .34], proxy);
    target.castShadow = target.receiveShadow = false;
    target.userData.slotId = slot.slotId;
    slotTargets.push(target);
  }
  for (const data of controller.books.values()) {
    const definition = shelvingDefinitions.find(d => d.id === data.definitionId);
    const model = makeBook(definition);
    model.userData.shelvingBookId = data.instanceId;
    books.set(data.instanceId, model);
    if (data.location.type === 'shelf') {
      const slot = controller.slots.find(s => s.slotId === data.location.slotId);
      shelves.get(slot.shelfId).add(model);
      model.position.fromArray(slot.localPosition);
      model.rotation.set(...slot.localRotation);
    } else {
      scene.add(model);
      model.position.fromArray(data.location.position);
      model.rotation.set(-Math.PI / 2, 0, .15 * (books.size % 3 - 1));
    }
  }
  // Lighting and fixtures remain owned by the environment.
  return { books, slotTargets };
}
