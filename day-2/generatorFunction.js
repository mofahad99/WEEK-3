// function * generator(){
//     console.log('Hi im Generator function')
// }
// console.log(generator())

// function * generator(){
//     console.log('Hi im Generator function')
// }
// const obj=generator()
// obj.next()

// function * generator(){
//     console.log('Hi im Generator function')
//     yield 1
// }
// const obj=generator()
// console.log(obj.next())

// function * generator(){
//     console.log('Hi im Generator function')
//     yield 1
// }
// const obj=generator()
// console.log(obj.next())
// console.log(obj.next())

// function * generator(){
//     yield 1
//     console.log('Hi im Generator function')
//     yield 5
//     yield 10
// }
// const obj=generator()
// console.log(obj.next())
// console.log(obj.next())

// console.log(obj.next())
// console.log(obj.next())

// console.log(obj.next())
// console.log(obj.next())

function * infiniteCounter(){
    let count=1;
    while(true){
        yield count++;
    }
}
const counter=infiniteCounter();
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)

