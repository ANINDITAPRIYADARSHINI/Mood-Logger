//happy mood
let happyEl = document.getElementById("happy-el")

function happyMood() {
    let msg1 = "I am happy :)"


    happyEl.textContent = msg1;
    console.log("clicked")
}

//sad mood

let sadEl = document.getElementById("sad-el")

function sadMood() {
    let msg2 = "I am sad :("

    sadEl.textContent = msg2;
    console.log("clicked")
}

//toohappy mood

let tooHappyEl = document.getElementById("tooHappy-el")

function tooHappyMood() {
    let msg3 = "I am very-very happy ;)"


    tooHappyEl.textContent = msg3;
    console.log("clicked")
}