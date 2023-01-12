// function are objects
function  add(x, y) {
    return x + y

}

const substract = function(x,y) {
    return x - y
} 

function multiply(x,y) {
    return x * y
} 
const divide = function (x,y) {
    return x / y

}

const operations = [add,substract, multiply, divide]

console.log(operations[3](20,20))

for (let func of operations){

    let result = func(30,45)
    console.log(result)
}

const thing = {
    doSomething: multiply
}
console.log(thing.doSomething(120,25))