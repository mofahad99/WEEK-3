const user={
    name:"Eonix",
    show(){
        console.log("value of this:",this.name);
    }
};
const temp=user;
temp.name="Changed";

temp.show()
user.show()