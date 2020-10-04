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
        this.hobbiesList.add(name);
    }
    getHobbyList(){
        return this.hobbiesList;
    }
}

let vicky = new User("Vicky", "vicky@gmail.com");
console.log(vicky);
console.log(vicky.getInfo());
