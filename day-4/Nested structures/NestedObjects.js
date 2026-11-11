// const student={
//     name:"Meera",
//     institute:"Eonix Solutions",
//     address:{
//         country:"India",
//         state:"Kerala",
//         city:"Thalassery",
//         location:{
//             lat:11.7480,
//             long:7548893
//         }
//     }
// }
// console.log(student.address)

// const student={
//     name:"Meera",
//     institute:"Eonix Solutions",
//     address:{
//         country:"India",
//         state:"Kerala",
//         city:"Thalassery",
//         location:{
//             lat:11.7480,
//             long:7548893
//         }
//     }
// }
// console.log(student.address.state)

// const student={
//     name:"Meera",
//     institute:"Eonix Solutions",
//     address:{
//         country:"India",
//         state:"Kerala",
//         city:"Thalassery",
//         location:{
//             lat:11.7480,
//             long:7548893
//         }
//     }
// }
// console.log(student.address.location)

// const student={
//     name:"Meera",
//     institute:"Eonix Solutions",
//     address:{
//         country:"India",
//         state:"Kerala",
//         city:"Thalassery",
//         location:{
//             lat:11.7480,
//             long:7548893
//         }
//     }
// }
// console.log(student.address.location.lat)

const student={
    name:"Meera",
    institute:"Eonix Solutions",
    address:{
        country:"India",
        state:"Kerala",
        city:"Thalassery",
        location:{
            lat:11.7480,
            long:7548893
        }
    }
}
for (let pr in student.address){
    console.log(`${pr}: ${student.address[pr]}`)
}