// const a1=[1,2,3,4]
// console.log(a1)

// const a1=[1,2,3,4]
// console.log(a1[0],a1[1])

// const a1=[1,2,3,4]
// console.log(a1[0],a1[1],a1[2],a1[3])

// const a1=[1,2,3,4]
// console.log(a1[0],a1[1],a1[2],a1[3])
// console.log(...a1)

// const a1=[1,2,3,4]
// const a2=a1
// a2.push(5)
// console.log(a1)
// console.log(a2)

// const a1=[1,2,3,4]
// const a2=[1,2,3,4]
// a2.push(5)
// console.log(a1)
// console.log(a2)

// const a1=[1,2,3,4]
// const a2=[5,6,7,8,9]
// const a3=[...a1,...a2]
// a2.push(5)
// console.log(a1)
// console.log(a2)
// console.log(a3)

// const user={name:"Meera", city:"Kochi"}
// console.log(user)

// const user={name:"Meera", city:"Kochi"}
// console.log(...user)

// const user={name:"Meera", city:"Kochi"};
// const user2={...user}
// console.log(user,user2)

// const user={name:"Meera", city:"Kochi"};
// const user2={...user,batch:'B1'}
// console.log(user,user2)

// const user={name:"Meera", city:"Kochi"};
// const user2={name:"Ayisha",state:"kerala",batch:'B1'}
// const obj={...user,...user2}
// console.log(obj)

// function sum(a,b,c){
//     return a+b+c;
// }
// const values=[10,20,30];
// console.log(sum(...values));

// function sum(a,b,c){
//     return a+b+c;
// }
// const values=[10,20,30];
// console.log(sum(values));

// const a1=[1,2,3,[4,5,6]]
// const a2=[...a1]
// console.log(a1)
// console.log(a2)

// const a1=[1,2,3,[4,5,6]]
// const a2=[...a1]
// a2.push(10)
// console.log(a1)
// console.log(a2)

// const a1=[1,2,3,[4,5,6]]
// const a2=[...a1]
// a2.push(10)
// a2[3].push(50)
// console.log(a1)
// console.log(a2)

const a1=[1,2,3,[4,5,6]]
const a2=[...a1]
a2.push(10)
a2.push(20)
a2[3].push(50)
a2[3].push(60)
console.log(a1)
console.log(a2)