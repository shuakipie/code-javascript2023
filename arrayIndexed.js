// // In JavaScript, an indexed array is an array that is accessed using numerical indices. Indexed arrays are a common and useful data structure in JavaScript, and they are often used to store and access a list of values.

// // Here are some common operations that can be performed on indexed arrays in JavaScript:

// // Accessing an element in the array:
// // Copy code
// let colors = ['red', 'green', 'blue'];
// let firstColor = colors[0]; // firstColor is 'red'
// let secondColor = colors[1]; // secondColor is 'green'
// // Updating an element in the array:
// // Copy code
// let colors = ['red', 'green', 'blue'];
// colors[1] = 'yellow'; // colors is now ['red', 'yellow', 'blue']
// // Adding an element to the end of the array:
// // Copy code
// let colors = ['red', 'green', 'blue'];
// colors.push('purple'); // colors is now ['red', 'green', 'blue', 'purple']
// // Removing an element from the end of the array:
// // Copy code
// let colors = ['red', 'green', 'blue'];
// let removedColor = colors.pop(); // colors is now ['red', 'green'], removedColor is 'blue'
// // Iterating over the elements in the array:
// // Copy code
// let colors = ['red', 'green', 'blue'];
// // if still true it's execute again the logic
// for (let i = 0; i < colors.length; i++) {
//    console.log(i) 
//   console.log(colors[i]);
// }
// // answer first for i = 0 ; 0 = red true input red then i = 1 then 1 is < 2 true i = 2 now print green next i = 2 and 2 < 2 
// // These are just a few examples of common operations that can be performed on indexed arrays in JavaScript. Indexed arrays are a useful and versatile data structure, and they are widely used in many different types of applications.
// // most used logic forloop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   } // answer is 0 1 2 3 4 

//   let colors = ['red', 'green', 'blue'];
//   // you create a new object to access the array
//   newcolor = colors[colors.length-1]
//   console.log(newcolor)

  let colors = ['red', 'green', 'blue'];
  // you create a new object to access the array
  newcolor = colors[0]
  console.log(newcolor)