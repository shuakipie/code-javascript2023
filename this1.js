// // this reference of the current scope
// function sayhi(){
//     console.log("HI")
//     console.log(this)
// }

// console.log(sayhi())


// const greet = function() {

//     console.log(this)
// }


const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    // method ot the object
    fullName() {
        const {
            first,
            last,
            nickName
        } = this
       return (`${first} ${last} AKA ${nickName}`)
    },
    printBio() {

        const fullname = this.fullName()
        console.log(`${fullname} this is a person`)
    },
    // function arrow
    // laugh: () => {
    //     console.log(this)
    //     console.log(`${this.nickName} says hahahahaha`)

    // } // don't use it
}
const printBio = person.printBio()

console.log(printBio)
console.log(person.laugh())


