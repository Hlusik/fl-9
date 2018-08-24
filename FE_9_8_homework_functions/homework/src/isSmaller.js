// Your code goes here
function isBigger(a, b){
    return a > b;
}

function isSmaller(a, b){
    return !isBigger(a, b);
}
let a = 5;
let b = -1;
alert(isSmaller(a, b));