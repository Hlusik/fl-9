// Your code goes here
function isPrime(a) {
    for(let i = 2; i < a; i++){
      if(a % i === 0) {
          return false;
      }
    }
    return a !== 1;
  }
let a = 8;
alert(isPrime(a));