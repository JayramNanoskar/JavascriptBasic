var User = function(name, hobbiesCount){
    this.name = name,
    this.hobbiesCount = hobbiesCount 
}

User.prototype.getDetails = function getDetail(){
    console.log(`${this.name} has ${this.hobbiesCount} hobbies `);
};

var john = new User('john', 2);
console.log(john);
john.getDetails();

var vishal = new User('vishal', 3);
console.log(vishal);
vishal.getDetails();