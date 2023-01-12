// add methods

const math = {
    numbers: [1,2,3,4,5],
    add: function(x,y){
        return x + y;
    },
    multiply: function(x,y){
        return x * y;
    },
    divide: function(x,y){
        return x / y;
    },
    subtract: function(x,y){
        return x - y;
    }
}

console.log(math.add(2,3)) //5
console.log(math.multiply(2,3)) //6
console.log(math.divide(10,5)) //2
console.log(math.subtract(5,2)) //3


const auth = {
    username: 'TommyBot',
    login() {
        console.log("LOGGIN YOU IN")
    },
    logout(){
        console.log('GOODBYE')
    }
}

console.log(auth.login())
console.log(auth.logout())