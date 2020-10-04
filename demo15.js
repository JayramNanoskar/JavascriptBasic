if(true){
    var firstName = "john";
    let lastName = "jordan";
}

console.log(firstName); //john - treat as global scope
console.log(lastName); //ReferenceError: lastName is not defined  - treat as local scope
