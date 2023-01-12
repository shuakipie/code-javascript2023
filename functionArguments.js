// function callThreeTimes(f) {    
//     f()
//     f()
//     f()
// }

function cry(){

    console.log("WHOWOWOWO WOWOWOWOW")
}

// callThreeTimes(cry)
// cry()
function rage() {
    console.log('grrrrrrr')

}

// function repeatNTimes(action, num){
//     for (let i = 0 ; i < num; i++){
//         action()
//     }

// }

// repeatNTimes(rage, 20)



function pickOne(f1, f2){

    let rand = Math.random()
    if(rand < 0.5){
        f1()
    } else{
        f2()
    }
}
pickOne(rage, cry)