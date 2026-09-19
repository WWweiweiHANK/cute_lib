import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ClosingReading } from '../src/closing-reading.js';
import { NightShelvingController } from '../src/night-shelving.js';

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
  assert.equal(c.books.size, 18);
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
  assert.equal(c.result.finalPlacements.length, 18);
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
