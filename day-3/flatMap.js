// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.map((v)=>[v*2])
// console.log(nums)
// console.log(arr)

// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.map((v)=>[v,v*2])
// console.log(nums)
// console.log(arr)
// console.log(nums.length)
// console.log(arr.length)

// let nums=[1,2,3,4,5,10,11,12,13,14,15]
// const arr=nums.flatMap((v)=>[v,v*2])
// console.log(nums)
// console.log(arr)
// console.log(nums.length)
// console.log(arr.length)

let nums=[1,2,3,4,5,10,11,12,13,14,15]
const arr1=nums.map((v)=>[[v,v*2]])
const arr2=nums.flatMap((v)=>[[v,v*2]])
console.log(nums)
console.log(arr1)
console.log(arr2)