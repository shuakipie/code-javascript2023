const prices = [
        400.50,
        3000,
        99.99,
        35.99,
        12,
        33.7
]

const ascSort= prices.slice().sort((a, b) => a - b)
const descSort = prices.sort((a,b) => b - a )

console.log(ascSort)
console.log(descSort)


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

// sort using array object
const newbooks = books.sort((a,b) => a.rating - b.rating)
const descbooks = books.slice().sort((a,b) => b.rating - a.rating)
console.log(newbooks)
console.log(descbooks)

const numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers);  // Output: [1, 2, 3, 4, 5]


const books = [
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { name: 'Pride and Prejudice', author: 'Jane Austen' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ];
  
  books.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(books);
  /*
  Output:
  [
    { name: 'Pride and Prejudice', author: 'Jane Austen' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]
  */
  