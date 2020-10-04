class User{
    constructor(name, email){
        this.name =  name;
        this.email = email;
    }
    hobbiesList = [];
    getInfo(){
        return {name : this.name, email : this.email};
    }
    addHobby(name){
        this.hobbiesList.push(name);
    }
    getHobbyList(){
        return this.hobbiesList;
    }
}

let vicky = new User("Vicky", "vicky@gmail.com");
console.log(vicky);
console.log(vicky.getInfo());

module.exports = User
