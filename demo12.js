function makeSubtraction(x) {
    return function(y) {
        return x - y;
    };
}
  
var sub5 = makeSubtraction(5);
var sub10 = makeSubtraction(10);
  
console.log(sub5);
console.log(sub5(2));  // 7
console.log(sub10(2)); // 12

//A closure gives you access to an outer function’s scope from an inner function
// sub5 and sub10 are both closures. 
// They share the same function body definition,
// but store different lexical environments.
// In sub5's lexical environment, x is 5, while in the lexical environment for sub10, x is 10.
