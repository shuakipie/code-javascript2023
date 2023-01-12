// const array = [1, 2, 3, 4, 5];
// for (const value of array) {
//   console.log(value);
// }
// const string = 'hello';
// for (const character of string) {
//   console.log(character);
// }
// const object = {a: 1, b: 2, c: 3};
// for (const [key, value] of Object.entries(object)) {
//   console.log(`${key}: ${value}`);
// }

// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }
// const fs = require('fs');
// const file = fs.readFileSync('file.txt', 'utf8');
// for (const line of file.split('\n')) {
//   console.log(line);
// }

// const $items = $('.item');
// for (const item of $items) {
//   console.log(item);
// }

// let subreddits = [
//     'soccer',
//     'popheads',
//     'cringe',
//     'books'
// ]

// for (let sub of subreddits){
//     console.log(sub)
// }
// for(let char of 'cockadoodledoo'){
//     console.log(char.toUpperCase())
// } 

// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ]
// for (let i = 0; i < magicSquare.length; i++){
//     let row = magicSquare[i]
//     let sum = 0
//     for (let j = 0; j < row.length; j++){

//         console.log(row[j])
//         sum += row[j]
//     }
//  console.log(`${row} summed to ${sum}`)
// }

// using for of
// for (let row of magicSquare){
//     let sum = 0
//     for(let num of row){
//         sum += num

//     }
//     console.log(`${row} summed to ${sum}`)
// }

const words1 = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']

for (let i = 0; i < words1.length; i++){
 console.log(`${words1[1]}${words2[i]}`)
}