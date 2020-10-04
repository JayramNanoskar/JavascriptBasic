var returnedValue = Math.max(2, 5, 1, 8, 4, 3, 9);
console.log("Max Value = "+returnedValue);

var myObj = {};
Object.assign(myObj, {a : 1, b : 2, c : 3}, {x : 4, y : 5,  z: 6});
console.log(myObj);


function sumTwoNum(a, b){
    return a + b;
}
var inputVal = [3, 5];
console.log("Calling sum () = "+sumTwoNum(5, 6, 2));
console.log("Sum of 2 Numbers = " +sumTwoNum(...inputVal)); // Spread operator - seperates input(array) into individual value here

function sumAllNum(a, b, ...numbers) //Rest operator - combines/bunch up the input into list here
{
    let mult = a * b;
    console.log(numbers);
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return [mult, sum];
}

console.log("Sum of all given Numbers = " +sumAllNum(3, 5, 11, 7, 1));
