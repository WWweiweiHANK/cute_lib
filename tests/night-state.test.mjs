import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ClosingReading } from '../src/closing-reading.js';
import { NightShelvingController } from '../src/night-shelving.js';
import { NightClearingController } from '../src/night-clearing.js';
import { canWalk } from '../src/night-world.js';

test('readers merging at the entrance cannot permanently block each other', () => {
  const c = new NightClearingController();
  c.active = true;
  function leave(id) {
    const v = c.getVisitor(id);
    c.startLeaveSequence(id, {x: v.position[0] + 1, z: v.position[2]});
    c.prepare(id); v.position = [...v.standAt]; c.leave(id);
  }
  leave('child');
  for (let i = 0; i < 340; i++) c.update(.025, {x: 0, z: 3});
  leave('headphones');
  for (let i = 0; i < 2400; i++) {
    c.update(.025, {x: 0, z: 3});
    for (const v of c.visitors) if (v.atDoor) c.markExited(v.id);
  }
  assert.equal(c.getVisitor('child').hasExited, true);
  assert.equal(c.getVisitor('headphones').hasExited, true);
});

test('clearing rise paths avoid the player and readers clear after a blocked aisle', () => {
  const c = new NightClearingController();
  c.active = true;
  for (const id of ['elder', 'headphones']) {
    const v = c.getVisitor(id), player = {x: v.standAt[0], z: v.standAt[2]};
    const end = c.standPosition(id, player);
    assert.ok(canWalk(end[0], end[2]));
    for (let i = 0; i <= 100; i++) {
      const x = v.position[0] + (end[0] - v.position[0]) * i / 100;
      const z = v.position[2] + (end[2] - v.position[2]) * i / 100;
      assert.ok(Math.hypot(x - player.x, z - player.z) >= .44, `${id} stands through player`);
    }
  }
  function leave(id) {
    const v = c.getVisitor(id);
    c.startLeaveSequence(id, {x: v.position[0] + 1, z: v.position[2]});
    c.prepare(id); v.position = [...v.standAt]; c.leave(id);
  }
  leave('child');
  for (let i = 0; i < 500; i++) c.update(.025, {x: -2, z: -.8});
  leave('elder');
  for (let i = 0; i < 2400; i++) {
    c.update(.025, {x: 0, z: 3});
    for (const v of c.visitors) {
      if (v.state === 'LEAVING') assert.ok(canWalk(v.position[0], v.position[2]));
      if (v.atDoor) c.markExited(v.id);
    }
  }
  assert.equal(c.getVisitor('child').hasExited, true);
  assert.equal(c.getVisitor('elder').hasExited, true);
});

test('clearing requires nearby reminders and real exits, supports either order and one child rise', () => {
  for (const order of [['child', 'elder', 'headphones'], ['headphones', 'elder', 'child']]) {
    const c = new NightClearingController();
    assert.equal(c.startLeaveSequence('elder', {x: -1, z: -2}), false, 'disabled while shelving');
    c.active = true;
    assert.equal(c.startLeaveSequence('elder', {x: 3, z: 2}), false, 'out of range');
    assert.equal(c.markExited('elder'), false, 'no skipping straight to exit');
    for (const [index, id] of order.entries()) {
      const v = c.getVisitor(id);
      assert.equal(c.startLeaveSequence(id, {x: v.position[0] + 1, z: v.position[2]}), true);
      assert.equal(c.startLeaveSequence(id, {x: v.position[0], z: v.position[2]}), false, 'duplicate ignored');
      assert.equal(c.prepare(id), true);
      v.position = [...v.standAt];
      assert.equal(c.leave(id), true);
      assert.equal(c.markExited(id), false, 'walking is not an exit');
      for (let i = 0; i < 1000 && !v.atDoor; i++) {
        c.update(.05, {x: 0, z: 3});
        assert.ok(canWalk(v.position[0], v.position[2]), `${id} route passes furniture`);
      }
      assert.equal(v.atDoor, true);
      assert.equal(c.isCleared(), false, 'reaching the inside door is not an exit');
      assert.equal(c.markExited(id), true);
      assert.equal(c.isCleared(), index === 2);
    }
    assert.equal(c.notice('child'), false, 'cannot respawn or stand again after departure');
  }
});

test('reading requires uninterrupted dwell on distinct pages and retains progress', () => {
  const reading = new ClosingReading();
  assert.equal(reading.time, '21:47');
  reading.update(1, 1.9);
  assert.equal(reading.advances, 0);
  reading.update(2, .1);
  reading.update(1, .2);
  assert.equal(reading.advances, 0);
  reading.update(1, 2);
  assert.equal(reading.time, '21:51');
  reading.update(0, 10);
  reading.update(1, 10);
  assert.equal(reading.advances, 1);
  for (const page of [2, 3, 4]) reading.update(page, 2);
  assert.equal(reading.ready, true);
  assert.equal(reading.time, '22:00');
  assert.deepEqual(reading.readingEvents, []);
});

test('shelving permits mistakes, protects occupancy, frees slots and recomputes completion', () => {
  const c = new NightShelvingController();
  assert.equal(c.books.size, 19);
  assert.equal(c.slots.length, 24);
  const original = c.slots.find(s => s.occupantBookId);
  const first = c.taskBookIds[0];
  assert.equal(c.pickup(first), true);
  assert.equal(c.pickup(c.taskBookIds[1]), false);
  assert.equal(c.place(first, original.shelfId, original.slotId), false);
  const wrong = c.slots.find(s => s.category === 'science' && !s.occupantBookId);
  assert.equal(c.place(first, wrong.shelfId, wrong.slotId), true);
  assert.equal(c.pickup(first), true);
  assert.equal(wrong.occupantBookId, null);
  assert.equal(c.place(first, wrong.shelfId, wrong.slotId), true);
  for (const id of c.taskBookIds.slice(1)) {
    const slot = c.slots.find(s => !s.occupantBookId);
    assert.equal(c.pickup(id), true);
    assert.equal(c.place(id, slot.shelfId, slot.slotId), true);
  }
  assert.equal(c.isTaskComplete(), true);
  assert.ok(c.result.wrongPlacementCount > 0);
  assert.equal(c.result.finalPlacements.length, 19);
  assert.ok(c.result.completedAt);
  assert.equal(c.pickup(original.occupantBookId), true);
  assert.equal(c.isTaskComplete(), false);
  assert.equal(c.result, null);
  assert.equal(c.place(c.heldBookId, original.shelfId, original.slotId), true);
  assert.equal(c.isTaskComplete(), true);
  const mistakes = c.result.wrongPlacementCount;
  const originalId = original.occupantBookId;
  c.pickup(originalId);
  const wrongOriginal = c.slots.find(s => !s.occupantBookId && s.category !== original.category);
  c.place(originalId, wrongOriginal.shelfId, wrongOriginal.slotId);
  assert.equal(c.result.wrongPlacementCount, mistakes + 1);
  assert.equal(c.result.finalPlacements.find(p => p.bookId === originalId).isCorrect, false);
  assert.equal(c.pickup('missing'), false);
});
