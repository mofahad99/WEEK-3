const user={
    name:"Eonix",
    show:function(){
        console.log("Value of this :",this);
    }
};
user.show()
const fn=user.show;
fn()