//  a safe way to access deeply nested properties without causing an error if something undefined or null


// const students=[
//     {
//         name:"Meera",
//         institute:"EonixSolutions",
//         address:{
//             country:"India",
//             state:"Kerala",
//             city:"Thalassery",
//             location:{
//                 lat:11.7480,
//                 long:75.4893
//             }
//         }
//     },
//      {
//         name:"Rahul",
//         institute:"EonixSolutions",
//         address:{
//             country:"India",
//             state:"Kerala",
//             city:"Kochi",
//             location:{
//                 lat:9.9312,
//                 long:76.2673
//             }
//         }
//     }
// ];
// console.log(students[0].address.location.lat)