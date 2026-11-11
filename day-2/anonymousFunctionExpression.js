// Anonymous Function Expression
// let y=function(){
//     console.log('Haaiii how ru ')
// }
// y()

function display(fn){
    console.log('Display fn')
    fn()
}
display(function(){
    console.log('Im anonymous')
})