// Push() - add to end
// Pop() - remove from end
// Shift() - remove from start
// unshift() - add to start

// Sure! Here are some examples of using the push() method to add elements to an array:

// Copy code
const fruits = ['apple', 'banana'];

// Add one element to the end of the array
fruits.push('mango');  // ['apple', 'banana', 'mango']

// Add multiple elements to the end of the array
fruits.push('lemon', 'orange');  // ['apple', 'banana', 'mango', 'lemon', 'orange']

// Add an element to the end of the array using the spread operator
const moreFruits = ['grapes', 'peaches'];
fruits.push(...moreFruits);  // ['apple', 'banana', 'mango', 'lemon', 'orange', 'grapes', 'peaches']
// In terms of using the push() method with an API, it might be used to add data from an API response to an array in your application. For example, let's say you are building a weather app that displays the forecast for the next 5 days. You might use the push() method to add each day's forecast data to an array as you receive it from the API.

// Here is an example of how this might look using the fetch() function to make an API request and the push() method to add the data to an array:

// Copy code
const forecast = [];

fetch('https://api.weather.com/forecast?zip=94040,us')
  .then(response => response.json())
  .then(data => {
    data.forecast.forEach(day => {
      forecast.push({
        date: day.date,
        temperature: day.temperature,
        conditions: day.conditions
      });
    });
  });

console.log(forecast);  // Array of forecast data for the next 5 days
// In this example, we are making a request to a weather API to get the forecast data for the next 5 days. The forecast array is initially empty, and we use the push() method to add an object with the date, temperature, and conditions for each day to the array.

let fruits = ['apple', 'banana', 'mango', 'orange'];

let lastFruit = fruits.pop();
// fruits is now ['apple', 'banana', 'mango']
// lastFruit is 'orange'

let numbers = [1, 2, 3, 4, 5];

let lastNumber = numbers.pop();
// numbers is now [1, 2, 3, 4]
// lastNumber is 5

let emptyArray = [];

let nothing = emptyArray.pop();
// emptyArray is still []
// nothing is undefined

// Removing the last element from an array and using it in a calculation
let prices = [10.99, 5.99, 3.99, 4.99];
let total = 0;

while (prices.length > 0) {
  total += prices.pop();
}
console.log(total); // 24.96

// Using pop() in combination with other array methods
let words = ['these', 'are', 'some', 'words'];
let lengths = words.map(word => word.length);
// lengths is [5, 3, 4, 5]

let longestWord = words.pop();
let longestLength = lengths.pop();

console.log(longestWord + ' is the longest word, with a length of ' + longestLength + ' characters.');
// 'words' is the longest word, with a length of 5 characters.


let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day in The Life',
    'Life on the mars'
]
// it will add to the last part of the array
topSongs.push('Fortunate Son')
// always remove last item on the array and return right away
topSongs.pop() // delete the last array
// other logic same with push if i assign an object it will have the value
let nextSong = topSongs.pop() // so the last part deleted on pop method will have the value for nextSong

 