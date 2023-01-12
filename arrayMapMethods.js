const numbers = [20, 21, 22, 23, 24, 25, 26, 27]
const words = ['asap', 'byob', 'rsvp', 'diy']

const doubles = numbers.map(function(num){
    return num * 2
})
// console.log(numbers)
console.log(`These are the DOUBLES value: ${doubles}`)


const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n% 2 === 0
    }
})   
console.log(numDetail)

// const double2 = []
// for (let num of numbers){
//     double2.push(num * 2)
// }

// console.log(double2)

const combineWords = words.map(function(word){
    return word.toUpperCase().split('').join('.')

})
console.log(combineWords)


const books = [

    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {

        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },

    {

        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },

    {

        title: 'Good Omens',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

const titles = books.map(function(b) {
    return b.title;

})

console.log(`Book Title: ${titles}`)
