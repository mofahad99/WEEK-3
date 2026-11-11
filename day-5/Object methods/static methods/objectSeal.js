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
// Object.seal(student)
// student.name="Ayisha"
// console.log(student)

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
Object.seal(student)
student.course="MERN"
console.log(student)