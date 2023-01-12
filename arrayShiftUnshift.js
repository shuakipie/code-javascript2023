const fruits = ['apple', 'banana', 'orange', 'mango'];

const first = fruits.shift();
console.log(first);  // Output: "apple"
console.log(fruits);  // Output: ["banana", "orange", "mango"]


// for unshift method

const fruits = ['apple', 'banana', 'orange', 'mango'];

const newLength = fruits.unshift('lemon', 'pear');
console.log(newLength);  // Output: 6
console.log(fruits);  // Output: ["lemon", "pear", "apple", "banana", "orange", "mango"]

let dishesTodo = ['big Platter']
dishesTodo.unshift('Large plate') // value: 2 ['Large Plate ', 'big Platter']
dishesTodo.unshift('small plate') // value: 3 ['small plate ', 'Large Plate', 'big Platter']

dishesTodo.shift() // ['Large Plate', 'big  Platter']
dishesTodo.shift() // ['big Platter'] and so on