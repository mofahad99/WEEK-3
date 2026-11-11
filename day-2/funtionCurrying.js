// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// const fn1=add(1)
// const fn2=fn1(2)
// const sum=fn2(10)
// console.log(sum)

// const add=a=>b=>c=>a+b+c
// const fn1=add(1)
// const fn2=fn1(2)
// const sum=fn2(10)
// console.log(sum)

// const add=a=>b=>c=>a+b+c
// const sum=add(1)(4)(50)
// console.log(sum)

// function register(school,year,id,name){
//     console.log(`${name} (${id})- ${school},year ${year}`);
// }
// register("Eonix school",2025,"s01","Devananda")
// register("Eonix school",2025,"s02","rahul")

const register = sc => yr => id => name =>
  console.log(`${name} (${id}) - ${sc}, Year ${yr}`);

const regStd = register('Eonix School')(2025);

regStd('s03')('Hari');