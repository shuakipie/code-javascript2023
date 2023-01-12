const words = ['dog', 'dig', 'log', 'wag', 'bag' ]


const all3letters = words.every(word => word.length === 3)

console.log(all3letters)

const lastG = words.every(word => {
    const last = word.length -1;
    return word[last] === 'g'

})

console.log(lastG)

const someStartD = words.some(word => word[0] === 'd') // either one of the word has d result is true

console.log(someStartD)

// some examples

