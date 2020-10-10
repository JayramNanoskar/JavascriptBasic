var cards = document.querySelectorAll(".card");
console.log(cards);

var count = 0;
var counter = document.querySelector(".counter");

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => {
    card.addEventListener("click", flip);
});

function flip(){
    // console.log(this);
    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
        console.log("firstflipped");
    }
    else{
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        check();
    }
}

function check(){
    console.log("Checking ..");
    if(firstCard.dataset.image == secondCard.dataset.image){
        success();
    }
    else{
        fail();
    }
}

let flipSuccess = 0;
function success(){
    console.log("match");
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    flipSuccess ++;
    reset();

}

function fail(){
    console.log("not match");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 500);
}

function reset(){ 
    //we can destructure val also
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}


(function shuffle(){
    cards.forEach((card) => {
        var index= Math.floor(Math.random() * 16);
        card.style.order = index; //flexbox property order
    });
})();


setInterval(() => {
    if(count < 90){
        count ++;
        counter.innerText = count;
    }
    if(flipSuccess == 8){
        setInterval(() => {
            alert("Congratulation, You won !!!");
            reset();
        }, 2000);
        reset();
    }
}, 1000);

setTimeout(() => {
    if(flipSuccess !== 8){
        setInterval(() => {
            alert("Sorry, You lost");
        }, 2000);
        reset();
    }
}, 90000);
