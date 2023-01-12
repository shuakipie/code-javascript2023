// Write a function to find the average value in an array of numbers
// avg([0,50]) // 25
// avg([75,76,80,95,100])


// function getAverage(arr) {
   
//     if(arr.length === 0) return 0
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum / arr.length
// }
// function getAverage(arr) {
//     if (arr.length === 0) return 0;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(`AVERAGE total of [10, 20, 20 , 100 , 200 , 200] is ${getAverage([10, 20, 20 , 100 , 200 , 200])}`);

// for loop fix

function avg(arr){

    let total = 0
    
    for(let num of arr){
        total += num
       }
        return total / arr.length
}

console.log(`AVERAGE total of [10, 20, 20 , 100 , 200 , 200] is ${avg([10, 20, 20 , 100 , 200 , 200])}`);
