// const [first]=[10,20,30,40];
// console.log(first)

// const [first,...nums]=[10,20,30,40];
// console.log(first,nums)

// const [...nums]=[10,20,30,40];
// console.log(nums)

// const [a,b,...nums]=[10,20,30,40];
// console.log(nums)

// function addAll(...nums){
//     return nums.reduce((a,n)=>a+n,0)
// }
// console.log(addAll(1,2,3,4,5,6,7,8,9))

// function addAll(...nums){
//     return nums.reduce((a,n)=>a+n,0)
// }
// console.log(addAll(1,2,3,4,5,6,7,8,9,10,11,12))

// const user={name:"Alice",age :25,city:"Dubai"}
// const {name,...rest}=user
// console.log(rest)


const user={name:"Alice",age :25,city:"Dubai"}
const {age,...rest}=user
console.log(rest)