class User{
    constructor(name, email){
        this.name =  name;
        this.email = email;
    }
    #hobbiesList = [];
    getInfo(){
        return {name : this.name, email : this.email};
    }
    addHobby(name){
        this.#hobbiesList.push(name);
    }
    getHobbyList(){
        return this.#hobbiesList;
    }
    static login(){
        console.log("Login for User");
    }
}

class SubUser extends User
{
    constructor(name, email)
    {
        //super(); //It is ok but to get values further need to call parent parameter which is defined in parent as below
        // otherwise values will be undefined in parent function calls
        super(name, email); // calling parent parameter constructor from child
    }
    getUserInfo(){
        console.log("I am sub user");
    }
    login(){
        console.log("Login for Sub user");
    }
}

let vicky = new User("Vicky", "vicky@gmail.com");

console.log(vicky);
console.log(vicky.getInfo());
vicky.addHobby("Writting");
console.log(vicky.getHobbyList());
console.log(vicky.hobbiesList); //undefined - because it is private prop, need to access using getter only
User.login(); //Static methods aren't called on instances of the class. Instead, they're called on the class itself 
module.exports = User
module.exports = SubUser
