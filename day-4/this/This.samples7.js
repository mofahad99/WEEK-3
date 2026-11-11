const user={
    name:"Eonix",
    show(){
        return function(){
            console.log("value of this:",this);
        };
    }
};
const fn=user.show();
fn();