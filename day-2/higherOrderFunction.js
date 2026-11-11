// function higherorder(hai){
//     console.log('HDF')
//     hai()
// }
// higherorder(()=>console.log('Haaii'))

function higherorder(){
    console.log('HDF')
    return()=>{
        console.log('Hai')
    }
}
//  let hai=higherorder()
//          hai()
higherorder()()


        