const mahendra = {
    firstName : "Mahendra",
    role : "Admin",
    hobbiesCount : 3,
    getInfo : function () {
        console.log(`${this.role}, ${this.firstName} has ${this.hobbiesCount} hobbies`);
    }
}

mahendra.getInfo();

const ravi = {
    firstName : "Ravindra",
    role : "Subadmin",
    hobbiesCount : 2
    
}

var raviInfo = mahendra.getInfo.bind(ravi);
 //borrow method getInfo to object ravi from object mahendra
 //It return reference 
raviInfo();
