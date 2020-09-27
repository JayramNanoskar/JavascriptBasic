//There are 2 context- Global and Execution
//tipper(30);
// allowed as it is as function, inside execution context - function declaration are scanned and made available 


function tipper(a)
{
    var bill = parseInt(a);
    console.log(bill + 5);
}

//bigTip(50); 
//not allowed as it is as varible, inside execution context - variable declaration are scanned and made undefined 
var bigTip = function (a)
{
    var bill = parseInt(a);
    console.log(bill + 15);
}
tipper(30);
bigTip(50);