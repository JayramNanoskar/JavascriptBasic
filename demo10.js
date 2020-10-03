var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is ${this.name}`);
    }
};

var vijay = Object.create(User);
vijay.name = "Vijay";
console.log(vijay);
vijay.getUserName();

var manish = Object.create(User, {
    name : {value : "Manish"},
    hobbiesCount : {value : 3},
});

console.log(manish);
console.log(manish.hobbiesCount);
manish.getUserName();
