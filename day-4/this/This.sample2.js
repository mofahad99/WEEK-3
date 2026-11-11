const user={
    name:"Eonix",
    show:function(){
        console.log('Inside show function this:-',this)
        function inner(){
            console.log("value of this:",this)
        }
        inner();
    }
}
user.show();