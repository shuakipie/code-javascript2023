// function sum() {
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currval) =>{
//         return total + currval
//     })

// }

// console.log(sum(10,20,30))

// function sum(...nums) {
//     return nums.reduce((total, currVal)=>{
//         return total + currVal
//     })

// }
// console.log(sum(10,20,30)) // using rest array

function fullname(first, last, ...titles){

    console.log('first', first)
    console.log('last', last)
    console.log('title', titles)
}

console.log(fullname('ShuakiPie', 'Dingcong', 'gwapo', 'tisoy', 'wow'))

// const multiply = (...nums) => (
//     nums.reduce((total, currVal) => total * currVal)
// )

// const multiply = (...nums) =>{
//     nums.reduce(total, currVal) =>{
//        return  total * currVal
//     }
// }
// const multiply = (...nums)=>(
//     nums.reduce((total, currVal) => total * currVal)
// )
// console.log(multiply(2,5,6,7))


const multiply = (...nums) => (
    nums.reduce((total, currVal)=> total * currVal)

)// using arrow function

// const multiply = (...nums) => {
//     return nums.reduce((total, currVal) => total * currVal,1);
// } using explicit function

console.log(multiply(2,5,6,7))

function sum(...nums){
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

console.log(sum(2,3,45,6,7,8,9))