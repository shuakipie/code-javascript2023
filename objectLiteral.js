// object literal is this one {}

const employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    position: 'Software Engineer',
    company: 'Acme Inc.',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: 10001
    },
    phoneNumbers: [
      { type: 'office', number: '212-555-1212' },
      { type: 'mobile', number: '917-555-1212' }
    ],
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  console.log(employee.getFullName()); // 'John Doe'
  console.log(employee.address.zip); // 10001
  // this [0] 0 is no.1 when looking for array []
  console.log(employee.phoneNumbers[0].number); // '212-555-1212'
  