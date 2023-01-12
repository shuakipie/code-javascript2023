// const square = function(x){
    // return x * x

// }

// const square = (x) => {
//     return x * x
// }

// console.log(square(2))


// const isEven = (num) => {
//     return num % 2 ===0
// }

// console.log(isEven(10))

// const multiply = (x,y) => {
//     return x * y

// }

// console.log(multiply(2,2))

// rewrite for single line
const square = (x) => x * x
console.log(square(2))


const isEven = (num) => num % 2 === 0

console.log(isEven(10))

// can't modify only if one parameter
const multiply = (x,y) => {
    return x * y
}
console.log(multiply(2,2))

const greet = () =>{
    console.log('HI!')

}
console.log(greet())