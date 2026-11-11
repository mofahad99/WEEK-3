// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:80,science:70}}
// ];
// let total=students.reduce((sum,el)=>{
//     return sum+el.marks.math+el.marks.english+el.marks.science
// },0)
// console.log('Total',total)

// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:80,science:70}}
// ];
// let total=students.reduce((sum,el)=>{
//    for(let mk  in el.marks){
//     sum=sum+el.marks[mk]
// }
// return sum
// },0)
// console.log('Total',total)

// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:80}}
// ];
// let total=students.reduce((sum,el)=>{
//     return sum+el.marks.math+el.marks.english+el.marks.science
// },0)
// console.log('Total',total)

// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:80}}
// ];
// let total=students.reduce((sum,el)=>{
//    for(let mk  in el.marks){
//     sum=sum+el.marks[mk]
// }
// return sum
// },0)
// console.log('Total',total)

// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:80,science:70}}
// ];
// let newArray=students.map((el)=>{
//     return{
//         name:el.name,
//         total:el.marks.math+el.marks.english+el.marks.science
//     }
// })
// console.log(newArray)

// Students who scored 90+ in any subject

// const students=[
//     {name:"meera",marks:{math:78,english:66,science:81}},
//     {name:"rahul",marks:{math:92,english:74,science:88}},
//     {name:"anu",marks:{math:65,english:98,science:70}}
// ];
// let newArray=students.filter((el)=>{
//     return el.marks.math>=90||el.marks.english>=90||el.marks.science>=90
// })
// console.log(newArray)

const students=[
    {name:"meera",marks:{math:78,english:66,science:81}},
    {name:"rahul",marks:{math:92,english:74,science:88}},
    {name:"anu",marks:{math:65,english:98,science:70}}
];
let newArray=students.filter((el)=>{
    return el.marks.math>=90||el.marks.english>=90||el.marks.science>=90
}).map((el)=>{
    return el.name
})
console.log(newArray)
