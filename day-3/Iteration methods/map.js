// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.map((v)=>{
//     return v*2
// })
// console.log(nums)
// console.log(arr)

// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.map((v)=>{
//     if(v%2==0){
//         return v
//     }else{
//         return v*2
//     }
// })
// console.log(nums)
// console.log(arr)

let nums=[1,2,3,4,5,10,11,12,13,14,15]
const arr=nums.map((v)=>{
    return v%2==0?v:v*2
})
console.log(nums)
console.log(arr)