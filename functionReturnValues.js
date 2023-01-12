// function multiplyBy(num){
//     return function(x) {
//     return x * num
//     }
// }

// const triple = multiplyBy(3)
// const double = multiplyBy(2)
// const halve = multiplyBy(0.5)

// console.log(halve(10))


// const isChild = makeBetweenFunc(0, 18)
// isChild(5) // true
// isChild(67)// false


function makeBetweenFunc(x, y){

        return function(num){
           return num >=x && num <= y
        }
}

const isChild =  makeBetweenFunc(0,30)


console.log(isChild(55))