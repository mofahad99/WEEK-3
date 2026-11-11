// function student(n,a,s){
//     return{
//         name:n,
//         age:a,
//         school:s,
//     }
// }
// const s1=student('fahd',18,'Eonix')
// console.log(s1)
// let s2=student('anu',20,'Eonix')
// console.log(s2)

let student=function(n='anonymous',a=20,s="Eonix"){
    return{
        name: n,
        age: a,
        school: s,
    }
}
const s1=student()
console.log(s1)
let s2=student('Fahd',20,'Eonix')
console.log(s2)