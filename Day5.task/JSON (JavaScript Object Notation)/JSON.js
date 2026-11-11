// JSON means used to store and transfer data,JSON is a text format
// looks like javascript object,but is not javascript,json is just a string


// const user={
//     name:"Alice",
//     age:25,
//     greet(){
//         console.log("Hai");
//     }
// };
// console.log(user)
// console.log(JSON.stringify(user))

// output={ name: 'Alice', age: 25, greet: [Function: greet] }
//        {"name":"Alice","age":25}

// In JavaScript, you can convert between Object ⇄ JSON String using two methods:

// 1,object to JSON string

// const user = {
//   name: "Alice",
//   age: 25
// };

// const json = JSON.stringify(user);

// console.log(json);
//  output={"name":"Alice","age":25}

// 2,JSON string to object
// const json = '{"name":"Alice","age":25}';

// const user = JSON.parse(json);

// console.log(user);
//  output={ name: 'Alice', age: 25 }