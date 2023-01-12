const runner = {
    first: "Eliud",
    last: 'Kipchoge',
    country: 'kenya',
    title: 'Elder of the Order of the Golden Heart of keyna'

}

const {first, last} = runner
console.log(`My First Winner is: ${first} and Second Winner is: ${last}`)

const {country: nation, title: honorific} = runner

console.log(nation)
console.log(honorific)

const {first, last, ...other} = runner
console.log(`My First Winner is: ${first} and Second Winner is: ${last} `)
console.log(`These are other object: ${JSON.stringify(other)}`);
console.table(other);
