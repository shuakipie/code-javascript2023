// Certainly! The indexOf() method is a string method in JavaScript that is used to find the index of the first occurrence of a specified substring in a string. It returns the index of the substring, or -1 if the substring is not found.

// Here are a few examples of how you can use the indexOf() method:

let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.indexOf('quick'));  // Output: 4
console.log(sentence.indexOf('lazy'));  // Output: 31
console.log(sentence.indexOf('turtle'));  // Output: -1

// You are correct that the indexOf() method is case-sensitive. In the first example, sentence.indexOf('the') returns 4 because the first occurrence of the substring "the" starts at index 4.
// However, it's important to note that the string sentence contains the substring "The", which starts with an uppercase "T". Therefore, the indexOf() method is able to find the substring "The" at index 0, even though you are searching for "the" with a lowercase "t".
// If you want to find the index of a substring that is an exact match, including the case, you can use the indexOf() method in conjunction with the toLowerCase() method, like this:

let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase().indexOf('the'));  // Output: 4
console.log(sentence.toLowerCase().indexOf('the', 5));  // Output: 31

let sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.indexOf('the'));  // Output: 4
console.log(sentence.indexOf('the', 5));  // Output: 31


