const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'music', 'travel'],
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    },
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  console.log(person.getFullName()); // 'John Doe'
  console.log(person.age); // 30
  

  const nft = {
    tokenId: '0x1234567890',
    name: 'My NFT',
    metadata: {
      description: 'This is my first NFT!',
      image: 'https://example.com/my-nft.png'
    },
    owner: '0xabcdefghij',
    approved: ['0xklmnopqrst']
  }
  
  console.log(nft.name); // 'My NFT'
  console.log(nft.metadata.description); // 'This is my first NFT!'
  console.log(nft.approved); // ['0xklmnopqrst']

  //more samples
  const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCaloriesBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
  };
  
  console.log(fitBitData.totalMiles); // 211.7
  