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
  task1 = new Task("Counter attack Venom")
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

xit('hero should have a collection of tasks --empty', function() {
  const actual = hero1.tasks;
  assert.strictEqual(actual, []);
});

xit('hero should have a collection of tasks', function() {
  const actual = hero1.tasks;
  assert.strictEqual(actual, "berries");
});

it('task should have description', function() {
  const actual = task1.description;
  assert.strictEqual(actual, "Counter attack Venom");
})


})
