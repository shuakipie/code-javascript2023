// Print the numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  } // answer: 1 2 3 4 5 6 7 8 9 10
  
  // Print the elements of an array
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  } // answer red, orange, yellow, green, blue , indigo, violet and false when i = 6
  
  // Iterate over the properties of an object
  let person = {
    name: "John",
    age: 30,
    job: "teacher"
  };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  } // answer display on array on person
  
  const array = [1, 2, 3, 4, 5];

  for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
  }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;

for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    console.log(chunk);
}
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const chunkSize = 3;

for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    console.log(chunk);
}

array.forEach(function(element) {
    console.log(element);
});

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log('Found 3!');
        break;
    }
    console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log('Found 3!');
        break;
    }
    console.log(array[i]);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
        continue;
    }
    console.log(array[i]);
}
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        console.log(array1[i] + array2[j]);
    }
}
outer: for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === 3 && array2[j] === 4) {
            console.log('Found 3 and 4!');
            break outer;
        }
        console.log(array1[i] + array2[j]);
    }
}

for (let i = 0; i < 10; i++) {
    // loop 10 times
    console.log(`Hello ${i + 1}`)
}


for (let i = 50; i >= 0; i -=10){
    console.log(`Decrease Answer: ${i}`)


}