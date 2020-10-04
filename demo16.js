var myMap = new Map();

myMap.set(0 , "Zero");
myMap.set(1 , "One");
myMap.set(2 , "Two");
myMap.set(3 , "Three");
myMap.set(4 , "Four");

console.log(myMap);
myMap.delete(0);

//iterating through for-of
for(let [key, value] of myMap){
    console.log(`${key} - ${value}`);
}  

//iterating through forEach
myMap.forEach((value, key) => (console.log(`${key} - ${value}`)));
