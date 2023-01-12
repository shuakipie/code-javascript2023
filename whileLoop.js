// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let count = 5;
// while (count >= 0) {
//   console.log(count);
//   count--;
// }


// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   let prop;
//   while (prop = Object.keys(obj)[0]) {
//     console.log(prop, obj[prop]);
//     delete obj[prop];
//   }
  

// const arr = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random()* 10)
while (guess !== target){
    console.log(guess)
    guess = Math.floor(Math.random()* 10)

}
console.log(`Target: ${target} Guess: ${guess}`)
console.log(`CONGRATS YOU WIN`)
