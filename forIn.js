// const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// // Output:
// // a: 1
// // b: 2
// // c: 3
// const array = ['a', 'b', 'c'];

// for (const index in array) {
//   console.log(`${index}: ${array[index]}`);
// }

// // Output:
// // 0: a
// // 1: b
// // 2: c
// const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
//   if (object.hasOwnProperty(property)) {
//     console.log(`${property}: ${object[property]}`);
//   }
// }

// Output:
// a: 1
// b: 2
// c: 3

// const jeopardyWinnings = {
//     regularPlay : 25222700,
//     wasonChallenge : 300000,
//     tournamentoOfChampions: 500000,
//     battleOfTheDecades: 100000
// }

// let total = 0
// for(let prop in jeopardyWinnings){
//     console.log(prop) // display the key value
//     console.log(jeopardyWinnings[prop]) // display the value
// }

// for(let prop in jeopardyWinnings){
//     console.log(prop) // display the key value
//     total += jeopardyWinnings[prop] // display the key value
// }

// console.log(`Ken Jennings Total Earnings: ${total}`)

// not good use on array better us for of
// for(let k in [88, 99, 77, 66]){
//     console.log(k)

// }