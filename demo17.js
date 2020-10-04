const user = ["Jayendra", 3, "sub admin"];
// var name = user[0];
// var hobbyCount = user[1];
var [name, hobbyCount, role] = user; //Destructuring an array
console.log(name);
console.log(hobbyCount);

const myUser = {
    uName : "Ravi",
    uHobbyCount : 2,
    uRole : "sub admin"
}

// console.log(myUser.uName);
const {uName, uHobbyCount, uRole} = myUser; //Destructuring an object
console.log(uName);
