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

Hero.prototype.getTaskByDescription = function(task_description) {
  for (task of this.tasklist) {
    if (task.description === task_description) {
      return task;
    }
  }
}

Hero.prototype.completeTask = function(task_description) {
  // this.tasklist[0].completed = true;
  for (task of this.tasklist) {
    if (task.description === task_description) {
      task.completed = true;
    }
  }
}

Hero.prototype.eatFood = function(food_item) {
  if (this.fav_food === food_item.name) {
    this.health += (food_item.replenishment_value * 2);
  }
  else {
    this.health += food_item.replenishment_value;
  }
}

Hero.prototype.sortByTasksByDifficulty = function() {
  this.tasklist
}

module.exports = Hero;
