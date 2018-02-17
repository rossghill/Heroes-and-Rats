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
  for (task of this.tasklist) {
    if (task.description === task_description) {
      task.completed = true;
    }
  }
}

Hero.prototype.returnIncompleteTasks = function() {
  incomplete_tasks = [];
  for (task of this.tasklist) {
    if (task.completed === false) {
      incomplete_tasks.push(task.description);
    }
  }
  return incomplete_tasks;
}

Hero.prototype.returnCompleteTasks = function() {
  complete_tasks = [];
  for (task of this.tasklist) {
    if (task.completed === true) {
      complete_tasks.push(task.description);
    }
  }
  return complete_tasks;
}

// Hero.prototype.returnTasks = function(request) {
//   tasks = [];
//   if (request === "completed") {
//
//   }
// }

Hero.prototype.eatFood = function(food_item) {
  if (this.fav_food === food_item.name && food_item.poisoned !== true) {
    this.health += (food_item.replenishment_value * 2);
  }
  else if (food_item.poisoned !== true) {
    this.health += food_item.replenishment_value;
  }
  else {
    this.health -= 50;
  }
}

Hero.prototype.sortByTasksByDifficulty = function() {
  this.tasklist
}

module.exports = Hero;
