const Hero = function(name, health, fav_food, tasks) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return `My name's ${this.name}!`;
}

module.exports = Hero;
