// // for each

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// nums.forEach(function(num) {
//     console.log(num * 2)

// })

// function printTriple(n) {

//     console.log( n * 3)

// }
// nums.forEach(printTriple)

// numbers.forEach((num) => {
//     console.log(num)

// })

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25

    },
    {

        title: 'Bone: The Comple edition',
        authors: ['Jeff Smith'],
        rating: 4.22
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        raiting: 4.11

    },
    {

        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }

]

// books.forEach(function(book){
//     console.log(`Books: ${(book.title.toUpperCase())} && Rating: ${(book.rating)}`)

// }) function

// for(let book of books){
//     console.log(`Books: ${(book.title.toUpperCase())} && Rating: ${(book.rating)}`)

// } // block

numbers.forEach(function(num, idx){
    console.log(idx, num)

})