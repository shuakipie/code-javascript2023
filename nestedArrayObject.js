// const nestedArray = [  [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(nestedArray[0][0]); // Output: 1
// console.log(nestedArray[1][1]); // Output: 5
// console.log(nestedArray[2][2]); // Output: 9

// const nestedObject = {
//     outerKey: {
//       innerKey1: 'value1',
//       innerKey2: 'value2',
//       innerKey3: {
//         innerKey4: 'value3',
//         innerKey5: 'value4'
//       }
//     }
//   };
  
//   console.log(nestedObject.outerKey.innerKey1); // Output: 'value1'
//   console.log(nestedObject.outerKey.innerKey3.innerKey4); // Output: 'value3'

//   const nestedObject = {
//   outerKey: {
//     innerKey1: 'value1',
//     innerKey2: 'value2',
//     innerKey3: {
//       innerKey4: 'value3',
//       innerKey5: 'value4'
//     }
//   }
// };

// console.log(nestedObject.outerKey.innerKey1); // Output: 'value1'
// console.log(nestedObject.outerKey.innerKey3.innerKey4); // Output: 'value3'

// const nestedArray = [  
// [    ['a', 'b', 'c'],
// ['d', 'e', 'f'],
// ['g', 'h', 'i']
// ],
// [    ['j', 'k', 'l'],
// ['m', 'n', 'o'],
// ['p', 'q', 'r']
// ],
// [    ['s', 't', 'u'],
// ['v', 'w', 'x'],
// ['y', 'z', '!']
// ]
// ];

// console.log(nestedArray[0][0][0]); // Output: 'a'
// console.log(nestedArray[1][2][2]); // Output: 'r'
// console.log(nestedArray[2][1][0]); // Output: 'w'

const student = {

    firstName: 'ShuakiPie',
    lastName: 'Dingcong',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}
const fullName = `${student.firstName} ${student.lastName}`
console.log(`FullName: ${fullName}`)
console.log(`Midterm Exam: ${student.exams.midterm}`);
console.log(`Final Exam: ${student.exams.final}`);
console.log(`Strengths: ${student.strengths[1]}`);


const combineOne = `${student.strengths[1]} ${student.exams.final}`

console.log(`Combine: ${combineOne}`)