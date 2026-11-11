const user={
    name:"Eonix",
    show(){
        return()=>{
            console.log("value of this:",this)
        };
    }
};
const fn=user.show();
fn();