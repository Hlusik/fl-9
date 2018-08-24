// Your code goes here
let a = 9;
let b = 5;
let c = -4;
let d = -9;
let array = [a, b, c, d];
Array.prototype.getClosestToZero = function(){   
    let i = this.map(Math.abs).indexOf(this.map(Math.abs).getMin());
    return this[i];
 }
 
 alert(array.getClosestToZero());