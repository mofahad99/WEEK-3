// function User(name){
//     this.name=name;
//     this.sayHai=function(){
//         console.log(`Hai,i am ${this.name}`)
//     }
// }
// const u1=new User("Alice")
// console.log(u1)

// function User(name){
//     this.name=name;
//     this.sayHai=function(){
//         console.log(`Hai,i am ${this.name}`)
//     }
// }
// const u1=new User("Alice")
// u1.sayHai()

// function User(name){
//     this.name=name;
// }
// User.prototype.sayHai=function(){
//     console.log(`hai,i am ${this.name}`)
// }
// const u1=new User("Alice");
// u1.sayHai()

// function User(name) {
//     this.name = name;
//     User.prototype.sayHai = function () {
//         console.log(`hai,i am ${this.name}`)
//     }
// }

// const u1 = new User("Alice");
// u1.sayHai()


// function grandParent(){
//     this.country="India";
// }
// grandParent.prototype.country="india"
// function parent(){
//     this.city="Kochi"
// }
// parent.prototype=Object.create(grandParent.prototype)
// parent.prototype.constructor=parent

// function Child(name){
//     this.name=name;
// }
// Child.prototype=Object.create(parent.prototype)
// Child.prototype.constructor=Child
// const child=new Child("Asha")
// console.log(child.country)

// function grandParent(){
//     this.country="India";
// }
// // grandParent.prototype.country="india"
// function parent(){
//     this.city="Kochi"
// }
// parent.prototype=Object.create(grandParent.prototype)
// parent.prototype.constructor=parent

// function Child(name){
//     this.name=name;
// }
// Child.prototype=Object.create(parent.prototype)
// Child.prototype.constructor=Child
// const child=new Child("Asha")
// console.log(child.country)

// function grandParent(){
//    // this.country="India";
// }
//  grandParent.prototype.country="india"
// function parent(){
//     this.city="Kochi"
// }
// parent.prototype=Object.create(grandParent.prototype)
// parent.prototype.constructor=parent

// function Child(name){
//     this.name=name;
// }
// Child.prototype=Object.create(parent.prototype)
// Child.prototype.constructor=Child
// const child=new Child("Asha")
// console.log(child.country)

// function grandParent(){
//    this.country="India";
// }
// function parent(){
//     grandParent.call(this)
//     this.city="Kochi"
// }
// parent.prototype=Object.create(grandParent.prototype)
// parent.prototype.constructor=parent

// function Child(name){
//     parent.call(this)
//     this.name=name;
// }
// Child.prototype=Object.create(parent.prototype)
// Child.prototype.constructor=Child
// const child=new Child("Asha")
// console.log(child.country)

// function grandParent(){
//    this.country="India";
// }
// function parent(){
//     grandParent.call(this)
//     this.city="Kochi"
// }
// parent.prototype=Object.create(grandParent.prototype)
// parent.prototype.constructor=parent

// function Child(name){
//     parent.call(this)
//     this.name=name;
// }
// Child.prototype=Object.create(parent.prototype)
// Child.prototype.constructor=Child
// const child=new Child("Asha")
// console.log(child.city)

// const obj=Object.create(null)
// console.log(obj)

// const obj=Object.create(null)
// console.log(obj.__proto__)

// const obj=Object.create(null)
// console.log(obj.toString())

// const obj=Object.create(null)
// const obj2={}
// console.log(obj2.toString())

// const user={
//     name:'kannan'
// }
// console.log(user)

// const user={
//     name:'kannan'
// }
// Object.prototype.age=26
// console.log(user.age)

// const user={
//     name:'kannan'
// }
// Object.prototype.age=26
//  const user2={
//     name:'Anu'
//  }
// console.log(user2.age)

// function user(name){
//     this.name=name;
// }
// user.prototype.sayHai=function(){
//     console.log(`Hi, i am ${this.name}`)
// }
// const u1=new user("Alice")
// u1.sayHai()


function user(name){
    this.name=name;
}
user.prototype.sayHai=function(){
    console.log(`Hi, i am ${this.name}`)
}
const u1=new user("Alice")
u1.sayHai=function(){
    console.log("Haaii")
}
u1.sayHai()