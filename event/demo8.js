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


const getMagicColor = (element , color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.backgroundColor = color;
    });
};

getMagicColor(redElement, getBgColor(redElement));
getMagicColor(cyanElement, getBgColor(cyanElement));
getMagicColor(violetElement, getBgColor(violetElement));
getMagicColor(orangeElement, getBgColor(orangeElement));
getMagicColor(pinkElement, getBgColor(pinkElement));
