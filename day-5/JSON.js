// const user={
//     name:"Alice",
//     age:25,
//     greet(){
//         console.log("Hai");
//     }
// };
// console.log(user)

// const user={
//     name:"Alice",
//     age:25,
//     greet(){
//         console.log("Hai");
//     }
// };
// console.log(user)
// console.log(JSON.stringify(user))

// const user={
//     name:"Alice",
//     age:25,
//     greet(){
//         console.log("Hai");
//     }
// };
// console.log(user)
// let jsonChanged=JSON.stringify(user)
// console.log(jsonChanged)

const user={
    name:"Alice",
    age:25,
    greet(){
        console.log("Hai");
    }
};
console.log(user)
let jsonChanged=JSON.stringify(user)
console.log(jsonChanged)
let obj=JSON.parse(jsonChanged)
console.log(obj)