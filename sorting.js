let numbers = [10, 5, 8, 1, 7];
numbers.sort();
console.log(numbers); // [1, 5, 7, 8, 10]

let words = ['cherry', 'apple', 'blueberry'];
words.sort();
console.log(words); // ['apple', 'blueberry', 'cherry']

let objects = [  {name: 'Suzie', age: 30},  {name: 'Jon', age: 40},  {name: 'Tim', age: 20},];

objects.sort((a, b) => a.age - b.age);
console.log(objects);
// [//   {name: 'Tim', age: 20},//   {name: 'Suzie', age: 30},//   {name: 'Jon', age: 40},// ]

let people = [

    'Mrs. Roinson',
    'Angie',
    'Jolene',
    'Maggie May',
    'Roxanne'
]

people.sort() // anser arrange alphabetically 

let nums = [ 34, 10, 10000, 67, 99] // answer 10,10000,34, 67, 99 this is how it short using numbers

let numbers = [10, 5, 8, 1, 7];
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 8, 7, 5, 1]

let numbers = [10, 5, 8, 1, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 7, 8, 10]