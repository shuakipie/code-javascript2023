const colors = [
   ['doe', 'buck'],
   ['ewe', 'ram'],
   ['peahen', 'peacock']

]




// Using an array literal
let nestedArray = [[1, 2, 3], [4, 5, 6]];

// Using the Array constructor
let nestedArray = new Array([1, 2, 3], [4, 5, 6]);

// Using the push() method
let nestedArray = [];
nestedArray.push([1, 2, 3], [4, 5, 6]);

// Using the concat() method
let nestedArray = [];
nestedArray = nestedArray.concat([[1, 2, 3]], [[4, 5, 6]]);

// Using the spread operator (...)
let nestedArray = [...[[1, 2, 3]], ...[[4, 5, 6]]];

// Using map() and an arrow function
let numbers = [1, 2, 3, 4, 5, 6];
let nestedArray = numbers.map(x => [x]);