let x=function hello(){
    console.log('Helloo')
}
x()

console.log(function hello(){
    console.log('Helloooa')
})
function print(){
    return function hello(){
        console.log('Haai')
    }
}
let fn=print()
fn()