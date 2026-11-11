const students=[
{
    name:"Meera",
    institute:"Eonix solutions",
    address:{
        country:"India",
        state:"Kerala",
        city:"Thalassery",
        location:{
            lat:11.7480,
            long:"75.4893"
        }
    }
},
{
    name:"Rahul",
    institute:"Eonix solutions",
    address:{
        country:"India",
        state:"Kerala",
        city:"Kochi",
        location:{
            lat:9.9313,
            long:"76.2673"
        }
    }
}
];
students.forEach(el=>{
    console.log(`${el.name}: ${el.address.city}`)
})