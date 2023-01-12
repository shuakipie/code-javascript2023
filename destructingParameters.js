const runner = {
    first: "Eliud",
    last: 'Kipchoge',
    country: 'kenya',
    title: 'Elder of the Order of the Golden Heart of keyna'

}

// function print(person){
//     const{first, last, title} = person
//     console.log(`${first} ${last}, ${title}`)
// }

// console.log(print(runner))

function print({first, last, title}){
    console.log(`${first} ${last}, ${title}`)
}

console.log(print(runner)) // object

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]


function parseResponse([protocol, statusCode, contentType]){
console.log(`Status: ${statusCode}`)
console.log(`Content: ${contentType}`)
console.log(`Prototype: ${protocol}`)

}

console.log(parseResponse(response))