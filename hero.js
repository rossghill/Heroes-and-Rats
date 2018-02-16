const Hero = function(name, health, fav_food, tasklist) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasklist = [];
}

Hero.prototype.talk = function() {
  return `My name's ${this.name}!`;
}

Hero.prototype.addTaskToList = function(task) {
  this.tasklist.push(task);
}

Hero.prototype.completeTask = function() {
  this.tasklist[0].completed = true;
}

Hero.prototype.eatFood = function(food_item) {
  if (this.fav_food === food_item.name) {
    this.health += (food_item.replenishment_value * 2);
  }
  else {
    this.health += food_item.replenishment_value;
  }
}

module.exports = Hero;
