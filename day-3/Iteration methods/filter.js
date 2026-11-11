// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.filter(v=>v%2==1)
// console.log(arr)

// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.filter(v=>v%2==0)
// console.log(arr)

let nums=[1,2,3,4,5,10,11,12,13,14,15]
const arr=nums.filter(v=>{
    console.log(v)
    return v>10
})
console.log(arr)