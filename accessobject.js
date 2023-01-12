const employee = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    },
    phoneNumbers: [
        { type: 'office', number: '212-555-1212' },
        { type: 'mobile', number: '917-555-1212' }
      ],
    
  };
  
  console.log(employee.firstName); // 'John'
  console.log(employee.address.city); // 'New York'
  console.log(employee.phoneNumbers[1].number) // 917-555-1212

  // other logic access object

  const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trobones': 'great song'
  }
// to access this '76 trobones
numbers['76 trobones'] // answer 76 trobones
[] // use this to retrive if not on the object

