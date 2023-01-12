
for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(`Found the target at index ${i}!`);
      break;
    }
  }
  
  switch (key) {
    case 'A':
      console.log('You pressed A');
      break;
    case 'B':
      console.log('You pressed B');
      break;
    default:
      console.log('You pressed something else');
      break;
  }

  outerLoop: for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        console.log(`Found the target at index (${i}, ${j})!`);
        break outerLoop;
      }
    }
  }
  
  while (true) {
    console.log('Enter a number:');
    const userInput = getUserInput();
    if (userInput === 'q') {
      console.log('Exiting loop');
      break;
    }
    console.log(`You entered ${userInput}`);
  }
  
  const target = Math.floor(Math.random() * 10)
  let guess = Math.floor(Math.random() * 10)
  while (true){

    if (target === guess) 
    break
    console.log(`Target:  ${target} Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)
  }

  console.log(`Target:  ${target} Guess: ${guess}`)
  console.log(`Congrats you WIN!!`)
