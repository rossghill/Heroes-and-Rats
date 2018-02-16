const Task = function(description, difficulty_level, urgency_level, reward, completed) {
  this.description = description;
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.completed = false;
}


module.exports = Task;
