let arr = [1, 2, 3, 4, 5];

// Remove one element from index 2
let removed = arr.splice(2, 1); // 3 getting splice or cut
console.log(arr); // [1, 2, 4, 5] // this is the new value without 3 
console.log(removed); // [3] // this is the removed or cut value
// more samples

// Insert the number 3 back into the array at index 2
arr.splice(2, 0, 3); // this will add the 3 on beside 4
console.log(arr); // [1, 2, 3, 4, 5]

// Replace the element at index 3 with the number 6
arr.splice(3, 1, 6); // the last parameter will add on the current array
console.log(arr); // [1, 2, 3, 6, 5]

// Remove two elements starting at index 2 and insert the numbers 7 and 8 in their place
arr.splice(2, 2, 7, 8);
console.log(arr); // [1, 2, 7, 8, 5]

// Remove all elements starting at index 1
arr.splice(1);
console.log(arr); // [1]
// this is better to use on the middle of the array because we can use pop and push for that 

let animals [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'

]

animals.splice(1,0, 'octopus') // added and octopus array on the middle of shark and salmon
animals.splice(3,2) // delete whale and bear
animals.splice(3,0, 'snake', 'frog') // insert it to salmon and lizard


