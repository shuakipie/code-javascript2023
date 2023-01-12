// JavaScript arrays are a type of object that allows you to store multiple values in a single variable. There are several methods you can use to modify arrays in JavaScript:

push() method: This method adds one or more elements to the end of an array and returns the new length of the array.
// Copy code
const fruits = ['apple', 'banana'];
fruits.push('mango');  // ['apple', 'banana', 'mango']
unshift() method: This method adds one or more elements to the beginning of an array and returns the new length of the array.
// Copy code
const fruits = ['apple', 'banana'];
fruits.unshift('mango');  // ['mango', 'apple', 'banana']
splice() method: This method adds or removes elements from an array. It takes three arguments: the index at which to start making changes, the number of elements to remove (if any), and the elements to add (if any).
// Copy code
const fruits = ['apple', 'banana', 'mango', 'orange'];
fruits.splice(2, 1, 'lemon');  // ['apple', 'banana', 'lemon', 'orange']
pop() method: This method removes the last element from an array and returns that element.
// Copy code
const fruits = ['apple', 'banana', 'mango'];
fruits.pop();  // ['apple', 'banana']
shift() method: This method removes the first element from an array and returns that element.
// Copy code
const fruits = ['apple', 'banana', 'mango'];
fruits.shift();  // ['banana', 'mango']
// You can also modify an array by assigning a new value to an existing element using its index, or by using the forEach() method to loop through the array and make changes to each element.

// I hope this helps! Let me know if you have any questions.

// Certainly!

// The forEach() method is used to execute a function on each element in an array. It takes as an argument a callback function, which is called for each element in the array. Here is an example of using forEach() to modify an array:

// Copy code
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  numbers[index] = number * 2;
});

console.log(numbers);  // [2, 4, 6, 8, 10]
// The callback function takes two arguments: the current element being processed, and the index of the element. In this example, we are multiplying each element by 2 and reassigning the result to the element at the same index.

// You can also use forEach() to iterate over the properties of a JavaScript object, also known as a JSON object. Here is an example:

// Copy code
const person = {
  name: 'John',
  age: 30,
  job: 'developer'
};

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Output:
// name: John
// age: 30
// job: developer