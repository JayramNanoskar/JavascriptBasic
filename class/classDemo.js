// import User from "./demo19"; //now other few framework uses this

const User = require("./demo19.js");

const vinay = new User("Vinay", "vinay@gmail.com");

vinay.addHobby("Reading");
vinay.addHobby("Traveling");
vinay.addHobby("Learning");
console.log(vinay);
console.log(vinay.getInfo());
console.log(vinay.getHobbyList());

let hobbies = vinay.getHobbyList();

hobbies.forEach((h) => (console.log(h)))
