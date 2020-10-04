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
}

let vicky = new User("Vicky", "vicky@gmail.com");

console.log(vicky);
console.log(vicky.getInfo());
vicky.addHobby("Writting");
console.log(vicky.getHobbyList());
console.log(vicky.hobbiesList); //undefined - because it is private prop, need to access using getter only

module.exports = User
