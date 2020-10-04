const one = () => {
    return "I am first";
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am second");
        }, 1000);
    });
};

const three = () => {
    return "I am third";
}


const callMe = async () => {
    let valOne = one();
    console.log(valOne);
    let valTwo = await two();
    console.log(valTwo);
    let valThree = three();
    console.log(valThree);
};

// Now with Promise, async and await - output will be
//I am first
//I am second
//I am third
//Infact execution will block/wait till two() complete then take three() which was not case prior Promise, async and await use
callMe();
