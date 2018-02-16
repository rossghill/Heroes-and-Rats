const Task = function(description, difficulty_level, urgency_level) {
  this.description = description;
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
}

module.exports = Task;
