const Food = function(name, replenishment_value, poisoned) {
  this.name = name;
  this.replenishment_value = replenishment_value;
  this.poisoned = false;
}

module.exports = Food;
