import test from 'node:test';
import assert from 'node:assert/strict';
import { NightShelvingController, shelvingDefinitions } from '../src/night-shelving.js';

test('recommendation is single submission, accepts a list and requires the physical book back', async () => {
  const module = await import('../src/night-recommendation.js').catch(() => ({}));
  assert.equal(typeof module.NightRecommendationController, 'function', 'recommendation controller exists');
  const {NightRecommendationController, recommendationRequest} = module;
  for (const [id, correct] of [['book_night_sky_guide_001', true], ['shelving_woodland-notes', false], ['shelving_light-machines', true]]) {
    const shelves = new NightShelvingController();
    const request = {...recommendationRequest, acceptableBookIds: [...recommendationRequest.acceptableBookIds, 'shelving_light-machines']};
    const c = new NightRecommendationController(shelves, request);
    assert.equal(c.submitRecommendation(id), false, 'no submission before request');
    c.startWaiting(); c.spawnVisitor(); c.visitorState = 'WAITING';
    assert.equal(c.startRequest(), true);
    c.finishRequest();
    assert.equal(c.startRequest(), true, 'can repeat empty-handed'); c.finishRequest();
    assert.equal(c.submitRecommendation('missing'), false);
    shelves.pickup(id);
    assert.equal(c.submitRecommendation(id), true);
    assert.equal(c.getResult().isCorrect, correct);
    assert.equal(shelves.heldBookId, id, 'recommendation never transfers ownership');
    const result = c.getResult();
    assert.equal(c.submitRecommendation(id), false);
    assert.equal(c.startRequest(), false);
    assert.deepEqual(c.getResult(), result);
    assert.equal(c.isComplete(), false);
    c.markVisitorExited();
    assert.equal(c.isComplete(), false, 'still held');
    const slot = shelves.slots.find(s => !s.occupantBookId && s.category === 'history');
    shelves.place(id, slot.shelfId, slot.slotId);
    assert.equal(c.isComplete(), true, 'wrong category is allowed');
    shelves.pickup(id);
    assert.equal(c.isComplete(), false, 'cannot use a stale reshelved flag');
  }
});

test('sky guide is a normal shelf instance, does not add a seventh scattered task', () => {
  const shelves = new NightShelvingController();
  const book = shelves.books.get('book_night_sky_guide_001');
  assert.ok(book);
  assert.equal(book.location.type, 'shelf');
  assert.equal(book.category, 'science');
  assert.equal(shelves.taskBookIds.length, 6);
  const def = shelvingDefinitions.find(d => d.id === book.definitionId);
  assert.ok(def.recommendationTags.includes('astronomy'));
  assert.equal(def.content.length, 3);
});

test('first request remains available with a book already in hand, without submitting it', async () => {
  const {NightRecommendationController} = await import('../src/night-recommendation.js');
  const shelves = new NightShelvingController(), c = new NightRecommendationController(shelves);
  c.startWaiting(); c.spawnVisitor(); c.visitorState = 'WAITING';
  shelves.pickup('book_night_sky_guide_001');
  assert.equal(c.startRequest(), true);
  assert.equal(c.getResult(), null);
  assert.equal(shelves.heldBookId, 'book_night_sky_guide_001');
});
