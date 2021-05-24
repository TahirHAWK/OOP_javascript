function Bird() {
  let weight = 15;

this.getWeight = function()   {
  return weight;
    }

    }

let fluffy = new Bird()

let m = fluffy.getWeight() 

console.log(m)