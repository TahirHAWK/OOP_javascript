function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

let bird = new Bird()
bird.fly()

let penguin = new Penguin();

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
}

// Only change code above this line


penguin.fly();

