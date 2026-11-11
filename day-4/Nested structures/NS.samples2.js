// let a2=[{numbers:[1,2,3]},{numbers:[4,5]},{numbers:[6]}]
// let sum=a2.reduce((s1,el)=>{
//     let sum2=el.numbers.reduce((s2,num)=>{
//         return s2+num
//     },0)
//     return s1+sum2
// },0)
// console.log(sum)

let a2=[{numbers:[1,2,3]},{numbers:[4,5]},{numbers:[6]}]
let sum=a2.reduce((s1,el)=>{
    let s=0
    el.numbers.forEach((num)=>{
        s=s+num
    })
    return s1+s
},0)
console.log(sum)