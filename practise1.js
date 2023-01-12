
// this one create the whole deck of cards


// console.log(makeDeck()) // display all cards of deck

// draw a single card
// function drawCard(deck){
//     return deck.pop()
// }

const myDeck = {
    // properties
    deck:[],
    drawnCards: [],
    suits:  ['hearts', 'diamonds', 'spades', 'clubs'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    initiallizeDeck(){
        const {
            suits, 
            values, 
            deck
        } = this // decontruct
        for (let value of values.split(',')){
            for (let suit of suits){
                deck.push({
                    value,
                    suit
                })
    
            }
        }
        // return deck
    },
    
    drawCard() {
     const card = this.deck.pop()
     this.drawnCards.push(card)
     return card
    },
    drawmultiple(numCards){
        const cards = []
        for(let i = 0 ; i < numCards; i++){
           cards.push(this.drawCard())
        }
        return cards
    },

    shuffle() {
        const {
            deck 
        } = this
          for (let i = deck.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i+1));
                [deck[i], deck[j]] = [deck[j], deck[i]]
        }
    }

}

//     function shuffle(arr){
//         for (let i = arr.length -1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i+1))
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//      }
// } this is a shuffle code

// console.log(myDeck.initiallizeDeck())
// // const card1 = myDeck.drawCard()
// // console.log(myDeck.suits)
// // console.log(myDeck.values)
// console.log(myDeck.deck)
// console.log(myDeck.shuffle())

myDeck.initiallizeDeck()
myDeck.shuffle()
const h1 = myDeck.drawmultiple(2)
const h2 = myDeck.drawmultiple(2)
const h3 = myDeck.drawmultiple(5)
console.log(h3)
console.log(h1)
console.log(h2)

// console.log(card1)
// console.log(myDeck.drawmultiple(10))
// console.log(myDeck.drawnCards)
