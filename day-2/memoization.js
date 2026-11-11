// const students=[
//     {name:"Devananda",grade:"Grade 5"},
//      {name:"Rahul" ,grade:"Grade 6"},
//       {name:"Anjali",grade:"Grade 5"},
//        {name:"Asha",grade:"Grade 6"},
// ];
// function getStudentByclass(grade){
//     console.log("Finding students for",grade)
//     let result=[];
//     for(let i=0;i<students.length;i++){
//         if(students[i].grade===grade){
//             result.push(students[i])
//         }
//     }
//     return result;
// }
// console.log(getStudentByclass("Grade 5"));
// console.log(getStudentByclass("Grade 6"));
// console.log(getStudentByclass("Grade 5"));


const students=[
    {name:"Devananda",grade:"Grade 5"},
     {name:"Rahul" ,grade:"Grade 6"},
      {name:"Anjali",grade:"Grade 5"},
       {name:"Asha",grade:"Grade 6"},
];
let cache={}
function getStudentByclass(grade){
    console.log("Finding students for",grade)
    if(cache[grade]){
        console.log('From cache')
        return cache[grade]
    }
    let result=[];
    for(let i=0;i<students.length;i++){
        console.log('Looking array')
        if(students[i].grade===grade){
            result.push(students[i])
        }
    }
    cache[grade]=result
    return result;
}
console.log(getStudentByclass("Grade 5"));
console.log(getStudentByclass("Grade 6"));
console.log(getStudentByclass("Grade 5"));
console.log(getStudentByclass("Grade 6"));