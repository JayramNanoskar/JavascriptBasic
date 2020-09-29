const redElement = document.querySelector(".color-red");
const cyanElement = document.querySelector(".color-cyan");
const violetElement = document.querySelector(".color-violet");
const orangeElement = document.querySelector(".color-orange");
const pinkElement = document.querySelector(".color-pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(redElement).backgroundColor);

const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var color = getBgColor(violetElement);

violetElement.addEventListener('click', () => {
    center.style.backgroundColor = color;
});
