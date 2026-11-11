// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// u1.init("Alice");
// console.log(u1)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// u1.init("Alice");
// console.log(u1.__proto__)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// u1.init("Alice");
// console.log(u1.__proto__==userProto)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// u1.init("Alice");
// console.log(u1.__proto__.__proto__==Object.prototype)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// u1.init("Alice");
// console.log(u1.__proto__.__proto__.__proto__==null)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// const u2=Object.create(u1)
// u1.init("alice"),
// console.log(u1.__proto__.__proto__.__proto__==null)
// console.log(u2)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// const u2=Object.create(u1)

// u1.init("Alice")
// u2.init('hari')

// console.log(u1.__proto__.__proto__.__proto__==null)
// console.log(u2)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// const u2=Object.create(u1)

// u1.init("Alice")
// u2.init('hari')

// console.log(u1.__proto__.__proto__.__proto__==null)
// console.log(u2.__proto__==u1)

// const userProto={
//     init(name){
//         this.name=name;
//     }
// };
// const u1=Object.create(userProto);
// const u2=Object.create(u1)

// u1.init("Alice")
// u2.init('hari')
// console.log(u1.__proto__.__proto__.__proto__==null)
// console.log(u2.__proto__==u1)

// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log(child)

// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log(child.name)

// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log(child.name,child.country)

// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log(child.name,child.countryfyhg)

const grandParent={country:"india"};
const parent= Object.create(grandParent)

parent.city="kochi";
const child=Object.create(parent);

child.name="Asha"
console.log(child.name,child.country,child.city)