const nums = [20, 25, 26, 27, 28, 29, 30, 70]

const odds = nums.filter(n => n % 2 === 1)
const even = nums.filter(n => n % 2 === 0)
const bigNums = nums.filter(n => n > 50)

console.log(odds)
console.log(even)
console.log(bigNums)


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
    rating: 4.11,
    genres: ['fiction', 'graphic novel', 'fantasy']

    },
    
    {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.11,
    genres: ['fiction', 'epic']
    }

]

// const goodBooks = books.filter(b => b.rating > 4.3 )
const goodBooks = books.filter(b => (
        b.rating > 4.3 
))
const fantasybooks = books.filter(books => (
    books.genres.includes('fantasy')
))

console.log(goodBooks)
console.log(fantasybooks)

const shortForm = books.filter(books => (
        books.genres.includes('essays')

))

console.log(shortForm)


const query = 'The'

const results = books.filter(books => {
    const title = books.title.toLowerCase()
    return title.includes(query.toLowerCase())
    
})

console.log(results)