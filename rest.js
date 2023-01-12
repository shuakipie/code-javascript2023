// function sum() {
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currval) =>{
//         return total + currval
//     })

// }

// console.log(sum(10,20,30))

function sum(...nums) {
    return nums.reduce((total, currVal)=>{
        return total + currVal
    })

}
console.log(sum(10,20,30))