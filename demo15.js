if(true){
    var firstName = "john";
    let lastName = "jordan";
}

console.log(firstName); //john - treat as global scope
//console.log(lastName); //ReferenceError: lastName is not defined  - treat as local scope

var progLangName = "Javascript";
var feedback = `${progLangName} is a lightweight, interpreted programming language `;
console.log(feedback.charAt(2));
console.log(feedback.endsWith("y"));
console.log(feedback.includes("script"));
console.log(feedback.toUpperCase());
