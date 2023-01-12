const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
const message = 'Hello, world!';

for (const character of message) {
  console.log(character);
}

const users = {
    'user1': {
      'name': 'John',
      'age': 30
    },
    'user2': {
      'name': 'Jane',
      'age': 25
    },
    'user3': {
      'name': 'Bob',
      'age': 35
    }
  };
  
  for (const userId in users) {
    const user = users[userId];
    console.log(`${user.name} is ${user.age} years old.`);
  }