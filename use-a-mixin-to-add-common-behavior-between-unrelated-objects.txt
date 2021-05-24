let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(unrelated_object){
  unrelated_object.glide = function(){
    console.log("glide now")
  }
}

glideMixin(boat)
glideMixin(bird)
bird.glide()
boat.glide()