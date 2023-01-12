// spread is ... 3 dots

function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)

}

console.log(giveMeFour(4,5,6,7))

const colors = ['red', 'orange', 'yellow', 'green']
console.log(giveMeFour(colors))
console.log(giveMeFour(...colors))

// ... spread literal

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]


let originalArray = [1, 2, 3, 4, 5];
let copyArray = [...originalArray];
console.log(originalArray === copyArray); // false
console.log(copyArray); // [1, 2, 3, 4, 5]

let obj1 = {a:1,b:2,c:3}
let obj2 = {d:4,e:5,f:6}
let combined = {...obj1, ...obj2}
console.log(combined)


let user = {
    name: "John",
    age: 30,
    location: "New York"
  };
  
  let preferences = {
    language: "English",
    theme: "Dark"
  };
  
  let additionalData = {
    active: true,
    registered: new Date()
  };
  
  let project = {
    ...user,
    ...preferences,
    ...additionalData,
    skills: [...new Set(["JavaScript", "React", "Node.js", "JavaScript"])],
    projects: [
      {
        name: "Project 1",
        client: "Client A"
      },
      {
        name: "Project 2",
        client: "Client B"
      }
    ]
  };
  
  console.log(project);
  


  const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']
  const gastropods = ['giant african snail', 'banana slug', 'vairable neon slug']
  const cnidaria = ['fire coral', 'moon jelly']

  const mollusca = [...cephalopods, ...gastropods, ...cnidaria]

  console.log(mollusca)
  console.log(cephalopods)