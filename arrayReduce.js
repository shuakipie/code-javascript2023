// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);  // Output: 15


// const words = ['cat', 'in', 'the', 'hat'];
// const sentence = words.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
// console.log(sentence);  // Output: 'cat in the hat'

// const string = 'the quick brown fox';
// const characterCounts = string.split('').reduce((accumulator, currentValue) => {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {});
// console.log(characterCounts);  // Output: { t: 2, h: 1, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 2, w: 1, n: 1, f: 1, x: 1 }

// // more examples

// const nums = [3, 4, 5, 6, 7]

// const products = nums.reduce((total, curVal ) => {
//     return total * curVal
// })

// console.log(products)

// // more reduce examples other use.

// let grades = [87,64,96,92,88,99,73,70,64]

// const maxGrade = grades.reduce((max, currentValue)=> {
//     // if(currentValue > max) return currentValue
//     // return max
//     return Math.max(max, currentValue)
// })
// const minGrade = grades.reduce((min, currentValue)=> {
//         // if(currentValue > max) return currentValue
//         // return max
//         return Math.min(min, currentValue)
    
//     })

// console.log(maxGrade)
// console.log(minGrade)

// more reduce function 

// const votes = ['y','y','n','y','n','y','n','y','n','y','n','n','n','y']

//  const result = votes.reduce((tally, val) => {
//     if(tally[val]) {
//         tally[val]++
//     } else{
//         tally[val] = 1
//     }
//     return tally
//  }, {})

//  console.log(result)

// const votes = ['y','y','n','y','n','y','n','y','n','y','n','n','n','y']

//  const result1 = votes.reduce((tally, val) => {
//         tally[val] = (tally[val] || 0) + 1
//     return tally
//  }, {})

//  console.log(result1)

//  // other examoles


 
const books = [{

    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']

    },

    {

    title: 'Bone: The Complete Edition',
    authors: ['jeff Smith'],
    rating: 4.42,
    genres: ['nonfiction', 'essays']
    },

    {
        
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 1.11,
    genres: ['fiction', 'graphic novel', 'fantasy']

    },
    
    {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 2.11,
    genres: ['fiction', 'epic']
    }

]


const newRating = books.reduce((groupedbooks, book)=>{
const key = Math.floor(book.rating)
    if(!groupedbooks[key]) groupedbooks[key] = []
    groupedbooks[key].push(book)
    return groupedbooks    
},{})

console.log(newRating)