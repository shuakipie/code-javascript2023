// // const can change if on the object
// const employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25
//   };
  
//   employee.age = 30;
  
//   console.log(employee.age); // 30
  
//   // more samples 

//   const employee = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };
  
//   const property = 'age';
//   employee[property] = 30;
  
//   console.log(employee.age); // 30
  
//   const nestedProperty = 'address.city';
//   const properties = nestedProperty.split('.');
//   employee[properties[0]] = {};
//   employee[properties[0]][properties[1]] = 'New York';
  
//   console.log(employee.address.city); // 'New York'

  // more samples
  const userReviews = {

  }

  userReviews['queenBeee49'] = 4.0
  userReviews.shuakipie = 3.6
  userReviews['queenBeee49'] += 2
  console.log(userReviews.shuakipie)
  console.log(userReviews['queenBeee49'])
  