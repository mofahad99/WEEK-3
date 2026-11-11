const user={
    name:"Eonix",
    show(){
        console.log("value of this:",this);
    }
};
const admin={name:"Admin"};
admin.show=user.show;
admin.show();