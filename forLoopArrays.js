let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} // answer 1 2 3 4 5

let array = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i]; // 1 + 2 + 3 + 4 + 5 = 15
}

console.log(sum); // 15

let array = [1, 2, 3, 4, 5];

for (let element of array) {
  console.log(element); // answer 1, 2, 3, 4, 5
}

let object = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let key in object) {
    console.log(`${key}: ${object[key]}`); // answer: a: 1, b: 2, c: 3
  }

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key}: ${object[key]}`); // answer: a: 1, b: 2, c: 3
    }
  }

  let array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].id}: ${array[i].name}`); // answer 1. Alice, 2. Bob, 3. Charlie
  }
  
  let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]); // answer
  }
}

let object = { a: 1, b: 2, c: 3 };

for (let value of Object.values(object)) {
  console.log(value);
}


let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(`${key}: ${object[key]}`);
  }
}


// more examples

const animals = [ 'lions', 'tigers', 'bears']
for (let i = 0 ; i < animals.length; i++) // length here is 3 that's why 1 < 3 is false until it reach to 3<3 is false
    {

            console.log(i + 1, animals[i]) // answer  0 lions, 1 tigers, 2 bears if add + 1 it says 1. lion 2. tiger 3. bears

    }   

const examScores = [98, 77, 84, 94, 57, 66] // length is 5 because its start to 0
let examScoreString = ""
for (let i = 0; i < examScores.length; i++){
    console.log(`${i + 1}. ${examScores[i]}`) // answer is 1. 98, 2. 77, 3. 84, 4.94 5.57, 6.66
    // examScoreString += `${i + 1}. ${examScores[i]} `

}

console.log(examScoreString)


const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {

        firstName: 'Apollo',
        grade: 90
    }
]

    for (let i = 0; i < myStudents.length; i++){
        let student = myStudents[i]
        // console.log(`${i + 1}. ${myStudents[i].firstName} ${myStudents[i].grade}`) // another logic but there's much better
        console.log(`${student.firstName} scored: ${student.grade}`)

    }

    let total = 0
    for (let i = 0; i < myStudents.length; i++){
        let student = myStudents[i]
        // console.log(`${i + 1}. ${myStudents[i].firstName} ${myStudents[i].grade}`) // another logic but there's much better
        total+= student.grade

    }
    console.log(total/myStudents.length)

const word = 'stressed'
// make it backward
let reverseWord = ''
for(let i = word.length-1; i >= 0 ; i-- ){
    reverseWord += word[i]
//  console.log(`${i}: ${word[i]}`) //desserts if only without the word it display with 8,7,6,5,4,3,2,1,
console.log(reverseWord)// it will display everything from 7-1 
}
console.log(reverseWord)