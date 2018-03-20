//created a dice constructor with one parameter
function Dice(sides) {
  //set the sides property of the instance that gets created when the dice constructor gets called with a new key word
  this.sides = sides;
  //Finally added the roll method
  this.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// A new instance of a basic sided dice
var dice = new Dice(6);