

var dice = {
  sides: 6,
  // A function on an object is known as a method
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
