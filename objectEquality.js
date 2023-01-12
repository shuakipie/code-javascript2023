// let obj1 = {a: 1};
// let obj2 = {a: '1'};
// console.log(obj1 == obj2);  // Output: true
// let obj1 = {a: 1};
// let obj2 = {a: '1'};
// console.log(obj1 === obj2);  // Output: false
// function isEqual(obj1, obj2) {
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
//   }
  

//   class TodoItem {
//     constructor(text, completed) {
//       this.text = text;
//       this.completed = completed;
//     }
  
//     equals(other) {
//       return this.text === other.text &&
//              this.completed === other.completed;
//     }
//   }
  

// let item1 = new TodoItem('Take out trash', true);
// let item2 = new TodoItem('Take out trash', true);
// console.log(item1.equals(item2));  // Output: true

// let item3 = new TodoItem('Do laundry', false);
// console.log(item1.equals(item3));  // Output: false

// // == and ===

// let nums = [1,2,3]
// let mystery = [1,2,3]

// nums === mystery // false
// let moreNums = nums
// nums === moreNums // true

// // more examples

const user = {

    username     : 'SHuakiPie',
    email        : 'shuakigaming@gmail.com',
    notifications : ['message', 'alert']
}

const newNotifications = [...user.notifications];

if (user.notifications === newNotifications) {
  console.log('This is true');
}

const newNotifications = Array.from(user.notifications);

if (user.notifications === newNotifications) {
  console.log('This is true');
}

