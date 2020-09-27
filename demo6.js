//window object in browser or {} in case of node
console.log(this);

var user = {
    name : "vikas",
    place : "mumbai",
    age : 25,
    hobbies : [],
    addHobbies : function (hobby) {
        this.hobbies = hobby; 
    },
    getUser : function () {
        // current object
        console.log(this);
    }
};

user.addHobbies('listening');
user.getUser();
