var checkEven = (number) =>
{
    return number % 2 === 0;
}

console.log(checkEven(9));

var result = [2, 4, 6, 8, 24].every(checkEven);

console.log(result);

var res = [2, 3, 6, 8, 24].every((e) => {
    return e % 2 === 0;
});

console.log(res);

