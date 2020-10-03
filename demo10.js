var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is ${this.name}`);
    },
};

var vijay = Object.create(User);
vijay.name = "Vijay";
console.log(vijay);
vijay.getUserName();
