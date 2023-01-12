// function multiply(x, y) {
//    y = typeof y === 'undefined' ? 1 : y
//    return x * y
// }
// new default params

// function multiply(x, y = 1) {
//     return x * y

// }

// console.log(multiply(20))


// const greet = (person, greeting = 'hi') => {
//     console.log(`${greeting},${person}`)
// }

// console.log(greet('john', 'musta'))

const blah = (x,y =[1,2,3]) =>{
    console.log(x, y)

}

console.log(blah(2))