function Dog() {
  this.name = "Cheddar"
  this.color = "brown"
  this.numLegs = 2
}

const dog1 = new Dog()

dog1.prototype = {
  age: 3
}

console.log(`hi the owner of ${dog1.name}, now he's ${dog1.prototype.age}`)