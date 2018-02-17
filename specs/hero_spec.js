const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');

describe('Hero', function() {

let hero1;
let hero2;
let hero3;
let hero4;
let task1;
let food1;
let food2;
let food3;

beforeEach(function() {
  hero1 = new Hero("Fox", 450, "berries");
  hero2 = new Hero("Falco", 480, "worms");
  hero3 = new Hero("Peppy", 320, "carrots");
  hero4 = new Hero("Slippy", 360, "flies");
  task1 = new Task("Counter attack Venom", 1, 5, "booster parts");
  task2 = new Task("Destroy the rock crusher", 2, 8, "shield upgrade");
  food1 = new Food("meat", 50);
  food2 = new Food("berries", 35);
  food3 = new Food("worms", 20);
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

it('task can be marked as completed', function() {
  hero1.addTaskToList(task1);
  console.log(hero1.tasklist);
  hero1.completeTask("Counter attack Venom");
  console.log(hero1.tasklist);
  // console.log(hero1.tasklist);
  // console.log(hero1.tasklist[0]);
  // console.log(hero1.tasklist[0].completed);
  const actual = hero1.tasklist[0].completed;
  // const actual = task1.completed;
  assert.strictEqual(actual, true);
});


it('food should have name', function() {
  assert.strictEqual(food1.name, "meat");
});

it('food should have replenishment_value', function() {
  assert.strictEqual(food2.replenishment_value, 35);
});

it('hero can eat food, gain health', function() {
  hero3.eatFood(food1);
  const actual = hero3.health;
  assert.strictEqual(actual, 370);
});

it('hero gains additional health from eating fav food', function() {
  hero1.eatFood(food2);
  const actual = hero1.health;
  assert.strictEqual(actual, 520);
});

xit('hero can sort tasks by difficulty', function() {

});

xit('hero can sort tasks by urgency', function() {

});

xit('hero can sort tasks by reward', function() {

});

xit('hero can view incomplete tasks', function() {

});

xit('hero can view complete tasks', function() {

});



})
