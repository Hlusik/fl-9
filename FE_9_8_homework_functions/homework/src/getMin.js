// Your code goes here
let a = 3;
let b = 0;
let c = -3;
let array = [a, b, c];

Array.prototype.getMin = function() {
  return Math.min.apply(null, this);
};

alert(array.getMin());