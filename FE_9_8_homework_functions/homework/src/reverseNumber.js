// Your code goes here
function reverseNumber(n){
	return Number(Math.abs(n).toString().split('').reverse().join(''))*Math.sign(n);
}
let a = -6540;
alert(reverseNumber(a));