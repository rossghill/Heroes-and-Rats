const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');

describe('Hero', function() {

let hero1;
let hero2;
let hero3;
let hero4;
let task1;

beforeEach(function() {
  hero1 = new Hero("Fox", 450, "berries");
  hero2 = new Hero("Falco", 480, "worms");
  hero3 = new Hero("Peppy", 320, "carrots");
  hero4 = new Hero("Slippy", 360, "flies");
  task1 = new Task("Counter attack Venom", 1, 5, "booster parts");
  task2 = new Task("Destroy the rock crusher", 2, 8, "shield upgrade");
})

it('hero should have name', function() {
  const actual = hero1.name;
  assert.strictEqual(actual, "Fox");
});

it('hero should have health', function() {
  const actual = hero2.health;
  assert.strictEqual(actual, 480);
});

it('hero should have fave food', function() {
  const actual = hero3.fav_food;
  assert.strictEqual(actual, "carrots");
});

it('hero can talk', function() {
  const actual = hero4.talk();
  assert.strictEqual(actual, "My name's Slippy!");
});

it('hero should have a collection of tasks --empty', function() {
  const actual = hero1.tasklist;
  assert.deepEqual(actual, []);
});

it('hero should have a collection of tasks', function() {
  hero1.addTaskToList(task1);
  hero1.addTaskToList(task2);
  const actual = hero1.tasklist.length;
  assert.deepStrictEqual(actual, 2);
});

it('task should have description', function() {
  const actual = task1.description;
  assert.strictEqual(actual, "Counter attack Venom");
});

it('task should have difficulty level', function() {
  const actual = task1.difficulty_level;
  assert.strictEqual(actual, 1);
});

it('task should have urgency level', function() {
  const actual = task2.urgency_level;
  assert.strictEqual(actual, 8);
});

it('task should have reward', function() {
  const actual = task1.reward;
  assert.strictEqual(actual, "booster parts");
});

it('task is not completed', function() {
  const actual = task1.completed;
  assert.strictEqual(actual, false);
})

xit('task can be marked as completed', function() {
  hero1.addTaskToList(task1);
  hero1.completeTask(task1);
  const actual = task1.completed;
  assert.strictEqual(actual, true);
});


})
