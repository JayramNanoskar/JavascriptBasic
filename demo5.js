
const arr = [2, 4, 1, 6, 9];

console.log(arr);

console.log("--------for------------");
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log("----------while----------");
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("--------do while------------");
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

console.log("--------for each------------");
arr.forEach((ele) => {
    console.log(ele);
});

console.log("--------for in------------");
for (const key in arr) {
        console.log(arr[key]);
}

console.log("--------for of------------");
const sym = {
    yt : "youtube",
    go : "google",
    fb : "facebook",
    inst : "instagram",
    twt : "twitter"
};

for (const n of Object.keys(sym)) {
    console.log(n);
}
