// function grumpus() {
//  console.log('YES')
//  console.log('NO')
//  console.log('Yes')

// }
// grumpus()

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
}

rollDie()

function throwDice() {
    rollDie()
    rollDie()
    rollDie()
    rollDie()
    rollDie()
    rollDie()

}