// const user={name:"Alice",age:25};
// console.log(user)

// const user={name:"Alice",age:25};
// console.log(Object.getPrototypeOf(user));

// const user={name:"Alice",age:25};
// console.log(Object.getPrototypeOf(user));
// console.log(user.__proto__)

// const user={name:"Alice",age:25};
// console.log(Object.getPrototypeOf(user));
// console.log(user.__proto__.__proto__)

// const user={name:"Alice",age:25};
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(user)));
// console.log(user.__proto__.__proto__)

// function user(name){
//     this.name=name;
// };
// const u1=new user("Alice")
// console.log(u1)

// function user(name){
//     this.name=name;
// }
// const u1=new user("Alice");
// console.log(u1.__proto__)

// function user(name){
//     this.name=name;
// }
// const u1=new user("Alice");
// console.log(u1.__proto__==user.prototype)

// function user(name){
//     this.name=name;
// }
// const u1=new user("Alice");
// console.log(u1.__proto__.__proto__==Object.prototype)

// function user(name){
//     this.name=name;
// }
// const u1=new user("Alice");
// console.log(u1.__proto__.__proto__.__proto__==Object.prototype)

function user(name){
    this.name=name;
}
const u1=new user("Alice");
console.log(u1.__proto__.__proto__.__proto__==null)