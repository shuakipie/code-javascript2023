let numbers = [1, 2, 3, 4, 5];
let firstThree = numbers.slice(0, 3);
console.log(firstThree);  // Output: [1, 2, 3]
// more samples
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(2, 4);
console.log(slicedArr);  // [3, 4]

// more samples
let str = 'Hello world';
// the second parameters it says do not include
let slicedStr = str.slice(3, 7);
console.log(slicedStr);  // 'lo w'

// more samples

let animals [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'

]

let swimmers = animals.slice(0, 2) // ['shark', 'salmon']
let mamals = animals.slice(2,4) // ['whale', 'bear']
let reptiles = animals.slice(4,6) // ['lizard' 'tortoise']
let quadruped = animals.slice(-3) // it will get the last -- of the array ['bear', 'lizard', 'tortoise']
let copy = animals.slice() // display all array