const user={
    name:"Eonix",
    show(){
        const inner=()=>{
            console.log("Value of this:",this)
        }
        inner();
    }
}
user.show()