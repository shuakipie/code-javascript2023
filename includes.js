// In JavaScript, the includes() method is used to determine whether a string contains a specific substring. It returns a boolean value indicating whether the substring was found or not.

// Here's an example of how you might use the includes() method:
let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes('quick'));  // Output: true
console.log(sentence.includes('lazy'));  // Output: true
console.log(sentence.includes('turtle'));  // Output: false


// Check if a string contains a specific character
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

console.log(alphabet.includes('a'));  // Output: true
console.log(alphabet.includes('z'));  // Output: true
console.log(alphabet.includes('A'));  // Output: false

// Check if an array contains a specific element
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));  // Output: true
console.log(numbers.includes(6));  // Output: false

// Check if an object has a specific property
let obj = { name: 'John', age: 30, occupation: 'developer' };

console.log(obj.hasOwnProperty('name'));  // Output: true
console.log(obj.hasOwnProperty('salary'));  // Output: false


// Check if a string contains multiple substrings
let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.includes('quick'));  // Output: true
console.log(sentence.includes('brown'));  // Output: true
console.log(sentence.includes('quick', 'brown'));  // Output: false

// Check if an array contains multiple elements
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(2));  // Output: true
console.log(numbers.includes(5));  // Output: true
console.log(numbers.includes(2, 5));  // Output: false

// Check if an object has multiple properties
let obj = { name: 'John', age: 30, occupation: 'developer' };

console.log(obj.hasOwnProperty('name'));  // Output: true
console.log(obj.hasOwnProperty('age'));  // Output: true
console.log(obj.hasOwnProperty('name', 'age'));  // Output: false
console.log(sentence.includes(/quick|brown/));  // Output: true
console.log(sentence.includes('quick') && sentence.includes('brown'));  // Output: true

// other examples for includes

let ingredients = [
        'water',
        'corn startch',
        'flour',
        'chess',
        'brown sugar',
        'shrimp',
        'eel',
        'butter'

]
// this is true because it has save value on the array flour
if(ingredients.includes('flour')){

    console.log("I can't eat that!")

}