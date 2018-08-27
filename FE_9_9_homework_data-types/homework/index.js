// Your code goes here
function findType(param){
    return typeof param;
}
let st = 'number';
console.log(findType(st));//1

function write(el){ 
    console.log(el);
}
let three = 3;
function map(el){
    return el + three;
}
function filter(el){
    return el > three;
}
function getAdultAppleLovers(data){
    if(data.age > 18 && data.favoriteFruit === 'apple'){
        return data.name;
    }
}
function forEach(array, fun){
    array.forEach(element => {
       fun(element);
    });
}

let a = 2;
let b = 5;
let c = 8;
let arr = [a, b, c]; 
forEach(arr, write); //2

forEach(arr, map); //3

forEach(arr, filter); //4

let ob = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'age': 39,
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'age': 2,
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'age': 17,
      'eyeColor': 'green',
      'name': 'Weiss',
      'favoriteFruit': 'banana'
    }
  ]

  forEach(ob, getAdultAppleLovers); //5

  function key(ob){
    return Object.keys(ob);
  }
  let keys = {keyOne: 1, keyTwo: 2, keyThree: 3};
  alert(key(keys)); //6

  function value(objArray){
    return Object.values(objArray);
  }
  let values = {keyOne: 1, keyTwo: 2, keyThree: 3}; 
  alert(value(values)); //7

  function showFormattedDate(data){
    let locale = 'en-us';
    return 'It is ' + data.getDate() + ' of ' 
            + data.toLocaleString(locale, { month: 'short' }) +', ' + data.getFullYear();
  } 
  let datashow = new Date('2018-08-27T01:10:00');
  alert(showFormattedDate(datashow));