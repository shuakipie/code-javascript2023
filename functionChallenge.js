// Write a isValidPassword function
// it accepts 2 arguments: password and username
// Password must: 
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// if all requirements are met, return true 
// otherwise: false
// isValidPassword ('89jj1nms', dogLuvr) true
// isValidPassword( 'dogLuvr123!', dogLuvr )

function isValidPassword(password, username){
    if( password.length < 8 ) {
        return false
    }
    if(password.includes(' ')) {
        return false
    }
    if(password.includes(username)) {
        return false

    }
    console.log(`'Sucess your Password:  ${password} and Username:  ${username} is in valid'`)
    return true

}

console.log(isValidPassword('Ryzen0142018@', 'ShuakiPie'))
console.log(isValidPassword('joemyams2014021', 'shuakiPie'))

function isValidPassword(password, username){
    if( password.length < 8 ) {
        return false
    }
    if(password.indexOf(' ') !== -1) {
        return false
    }
    if(password.indexOf(username) !== -1) {
        return false

    }
    console.log(`'Sucess your Password:  ${password} and Username:  ${username} is in valid'`)
    return true

}

console.log(isValidPassword('Ryzen0142018@', 'ShuakiPie'))
console.log(isValidPassword('joemyams2014021', 'shuakiPie'))

function isValidPassword(password, username) {
    return password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1;
  }
  
  console.log(isValidPassword('Ryzen0142018@', 'ShuakiPie'));
  console.log(isValidPassword('shuakiPie2014021', 'shuakiPie'));

