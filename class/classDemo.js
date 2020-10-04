// import User from "./demo19"; //now other few framework uses this

const User = require("./demo19.js");
const SubUser = require("./demo19.js");

const vinay = new User("Vinay", "vinay@gmail.com");

vinay.addHobby("Reading");
vinay.addHobby("Traveling");
vinay.addHobby("Learning");
console.log(vinay);
console.log(vinay.getInfo());
console.log(vinay.getHobbyList());
console.log(vinay.hobbiesList); //undefined - because it is private prop, need to access using getter only

let hobbies = vinay.getHobbyList();

hobbies.forEach((h) => (console.log(h)))

const peter = new SubUser("Peter", "peter@gmail.com");
//const peter = new SubUser(); // It is ok but to get values further need to pass in parent constructor as above otherwise values will be undefined
console.log(peter.getUserInfo());
console.log(peter);
console.log(peter.getInfo());
