var testArray = [2 ,5, 3, 8, 22];
var tArray = ["ok", "bye", "welcome", "hi", "hey"];

console.log(tArray.fill('ok'));

console.log(testArray.filter((num) => ( num!= 3)));

var r = testArray.filter((num) =>  num > 5);

console.log(r);
console.log(typeof r);