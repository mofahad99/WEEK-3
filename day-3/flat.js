// const arr=[1,2,3,[4,5,6]]
// console.log(arr)
// console.log(arr.flat())

// const arr=[1,2,3,[4,[5,6]]]
// console.log(arr)
// console.log(arr.flat(2))

// const arr=[1,2,3,[4,[5,[6]]]]
// console.log(arr)
// console.log(arr.flat(2))


// const arr=[1,2,3,[4,[5,[[[6]]]]]]
// console.log(arr)
// console.log(arr.flat(Infinity))

const arr=[1,2,3,[4,[5,[[[6]]]]]]
console.log(arr)
console.log(arr.flat(3))
