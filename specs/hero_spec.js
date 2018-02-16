const assert = require('assert');
const Hero = require('../hero');

describe('Hero', function() {

let hero1;
let hero2;
let hero3;
let hero4;

beforeEach(function() {
  hero1 = new Hero("Fox", 450);
  hero2 = new Hero("Falco", 480);
  hero3 = new Hero("Peppy", 320);
  hero4 = new Hero("Slippy", 360);
})

it('hero should have name', function() {
  const actual = hero1.name;
  assert.strictEqual(actual, "Fox");
});

xit('hero should have health', function() {
  const actual = hero1.health;
  assert.strictEqual(actual, 450);
});

xit('hero should have fave food', function() {
  const actual = hero1.fav_food;
  assert.strictEqual(actual, "berries");
});

xit('hero can talk', function() {
  const actual = hero1.talk;
  assert.strictEqual(actual, "All ships check in!!");
});

xit('hero should have a collection of tasks --empty', function() {
  const actual = hero1.tasks;
  assert.strictEqual(actual, []);
});

xit('hero should have a collection of tasks', function() {
  const actual = hero1.tasks;
  assert.strictEqual(actual, "berries");
});


})
