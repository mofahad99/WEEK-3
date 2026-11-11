// const student={
//     name:"Meera",
//     age:"21",
//     city:"Thalassery"
// };
// const updates={
//     city:"Kochi",
//     course:"Mern"
// };
// const course={
//     courseName:"Full stack web development",
//     Frontend:["HTML"," CSS" ,"javaScript" ,"React"],
//     backend:["node .js", "Express", "mongoDB"]
// };
// console.log(student)

// const student={
//     name:"Meera",
//     age:"21",
//     city:"Thalassery"
// };
// const updates={
//     city:"Kochi",
//     course:"Mern"
// };
// const course={
//     courseName:"Full stack web development",
//     Frontend:["HTML"," CSS" ,"javaScript" ,"React"],
//     backend:["node .js", "Express", "mongoDB"]
// };
// console.log(student)
// Object.assign(student,updates,course)
// console.log(student)

// const student={
//     name:"Meera",
//     age:"21",
//     city:"Thalassery"
// };
// const updates={
//     city:"Kochi",
//     course:"Mern"
// };
// const course={
//     courseName:"Full stack web development",
//     Frontend:["HTML"," CSS" ,"javaScript" ,"React"],
//     backend:["node .js", "Express", "mongoDB"]
// };
// console.log(student)
// console.log(Object.assign(student,updates,course))
// console.log(student)

// const student={
//     name:"Meera",
//     age:"21",
//     city:"Thalassery"
// };
// const updates={
//     city:"Kochi",
//     course:"Mern"
// };
// const course={
//     courseName:"Full stack web development",
//     Frontend:["HTML"," CSS" ,"javaScript" ,"React"],
//     backend:["node .js", "Express", "mongoDB"]
// };
// console.log(student)
// let updatedStudent=Object.assign({},student,updates,course)
// console.log(updatedStudent)

const student={
    name:"Meera",
    age:"21",
    city:"Thalassery"
};
const updates={
    city:"Kochi",
    course:"Mern"
};
const course={
    courseName:"Full stack web development",
    Frontend:["HTML"," CSS" ,"javaScript" ,"React"],
    backend:["node .js", "Express", "mongoDB"]
};
console.log(student)
// let updatedStudent=Object.assign({},student,updates,course)
let updatedStudent={...student,...course,...updates}
console.log(updatedStudent)