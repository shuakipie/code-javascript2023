// if (true) {
//     let animal = 'eel'
//     console.log(animal)
// } // this is a blocks


// if (true) {
//     // var no scope you can access on the outside that's why not use on var
//    var animal = 'eel'
//     console.log(animal)
// } // this is a blocks

// // console.log(animal)
// var  i = 10
// let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
// for ( var i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }

// console.log(i)

// //let i = 10
// let animals = ['grizzly bear', 'panda bear', 'spectacled bear']
// for ( let i = 0; i < animals.length; i++){
//     console.log(i, animals[i])
// }

// // console.log(i)


function doubleArr(arr){
    const results = []
    for(let num of arr){
        let double = num * 2
        results.push(double)
    }
    
    return results
}

console.log(doubleArr([20,20,20,20]))