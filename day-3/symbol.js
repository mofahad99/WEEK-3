const id = Symbol("id");
let location=Symbol('loc')
const institute = {
name : "Eonix",
[location ]: "Thalassery, Kerala",
"course type": "MERN",
[id]: 101,
}
console. log(institute);
institute.mentor=null
institute. location=' sdsdfdfgfdg'
console. log(institute)
let location2=Symbol('loc')
institute[location2]='UAE'
console. log(institute)
delete institute.mentor
console.log(institute)