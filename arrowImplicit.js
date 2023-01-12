// const square = n => {
//     return n * n

// } // rewrite using arrow Implicit

// const square = n => n * n
// console.log(square(20)) // arrow implicit format

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const doubles1 = nums.map(function(n){
    return n * 2

}) // anonymous function

const doubles2 = nums.map(n => {
    return n * 2
}) // arrow function

const double3 = nums.map(n => n * 2) // implicit arrow


// const parityList = nums.map(function(n){
//     if(n % 2 === 0) return 'even'
//         return 'odd'
// })
// const parityList = nums.map((n) =>{
//     if(n % 2 === 0) return 'even'
//     return 'odd'
// })
// console.log(parityList) // arrow function

const parityList = nums.map(n => (
   n % 2 === 0 ? 'even' : 'odd'
)) // arrow implicit
