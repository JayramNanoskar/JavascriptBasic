const one = () => {
    return "I am first";
}

const two = () => {
    setTimeout(() => {
        console.log(new Date());
    }, 10);
    return "I am second";
}

const three = () => {
    return "I am third";
}


const callMe = () => {
    console.log(two());
    console.log(three());
    console.log(one());
};

callMe();
