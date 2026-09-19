import assert from 'node:assert/strict';
import { canWalk, moveWalker, walkObstacles } from '../src/night-world.js';

const behind = {x: 0, y: 1.85, z: 2.72};
for (let i = 0; i < 100; i++) moveWalker(behind, 0, 1, 0, .05);
assert.ok(behind.z > 2.42, 'counter blocks forward motion');
for (let i = 0; i < 45; i++) moveWalker(behind, 0, 0, 1, .05);
assert.ok(behind.x > 2.95, 'counter exit accessible');
for (let i = 0; i < 80; i++) moveWalker(behind, 0, 1, 0, .05);
assert.ok(behind.z < 0, 'exit connects to library');
for (const [left, right, back, front] of walkObstacles)
  assert.equal(canWalk((left + right) / 2, (back + front) / 2), false);
for (const [x, z] of [[-5.2, 0], [5.2, 0], [0, -4.2], [0, 4]]) assert.equal(canWalk(x, z), false);
const straight = {x: 0, z: -1}, diagonal = {x: 0, z: -1};
moveWalker(straight, 0, 1, 0, .05); moveWalker(diagonal, 0, 1, 1, .05);
assert.ok(Math.abs(Math.hypot(straight.x, straight.z + 1) - Math.hypot(diagonal.x, diagonal.z + 1)) < 1e-9);
console.log('PASS: counter exit, all furniture and outer walls, normalized diagonal movement.');
