// const student={
//     name:"Meera",
//     age:"21",
//     city:"Thalassery"
// };
// console.log(Object.values(student))

// const marks={
//     math:85,
//     physics:78,
//     chemistry:90,
//     biology:80,
// }
// let result=Object.values(marks)
// console.log(result)

// const marks={
//     math:85,
//     physics:78,
//     chemistry:90,
//     biology:80,
// };
// let result=Object.values(marks).reduce((s,n)=>s+n,0)
// console.log(result)

const marks={
    math:85,
    physics:78,
    chemistry:90,
    biology:80,
};
let result=Object.values(marks).reduce((s,n)=>s+n,0)
let result2=Object.keys(marks)
console.log(result2)