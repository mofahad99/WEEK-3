// const user={name:"Alice",age:25};
// const{a,b}=user
// console.log(a,b)

// const user={name:"Alice",age:25};
// const{name,age}=user
// console.log(name,age)

// const user={name:"Alice",age:25};
// const{name:a,age:b}=user
// console.log(a,b)

// const user={name:"Alice",age:25};
// const{name:a,age:b}=user
// console.log(name,age)

// let name='Anu'
// let age=20
// const obj={
//     name:'name',
//     age:age
// }
// console.log(obj)

// let name='Anu'
// let age=20
// const obj={
//     name,
//     age
// }
// console.log(obj)

// const user={name:"Alice",age:25}
// const{age,name}=user
// console.log(age,name)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name,address}=student
// console.log(name,address)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name,address:{state}}=student
// console.log(name,state)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name,address:{state,city}}=student
// console.log(name,state,city)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name,address:{state,city}}=student
// console.log(name,state,city,address)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name:sName,address:{state,city}}=student
// console.log(name,state,city,)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name:sName,address:{state,city}}=student
// console.log(sName,state,city,)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name:sName,address:{state:gh,city}}=student
// console.log(sName,state,city,)

// const student={
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//         state:"kerala"
//     }
// };
// const{name:sName,address:{state:gh,city}}=student
// console.log(sName,gh,city,)

// const student=[
//     {   
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//     }
//     }
// ];
// const[a]=student
// console.log(a)

// const students=[
//     {   
//     name:"Meera",
//     address:{
//         city:"Thalassery",
//     }
//     }
// ];
// const[{name,address:{city}}]=students
// console.log(name,city)

// values swap using Desturcture

// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log(a,b)

// const numbers=[1,[2,3],4];
// let [a,,d]=numbers
// console.log(a,d)
// console.log(numbers);
// [numbers[2],numbers[0]]=[numbers[0],numbers[2]]
// console.log(numbers)

const numbers=[1,[2,3],4];
console.log(numbers);
[numbers[2],numbers[0]]=[numbers[0],numbers[2]]
console.log(numbers)