console.log('js file linked');

const box = document.getElementById('box');
let position = 0;

const containerWidth = document.getElementById('container').offsetWidth;

console.log(containerWidth);

// variable to hold the set interval function


function moveBox() {

    if (position < containerWidth - 500) {

    position +=1;
    box.style.left = position + "px";
    
    }
}

function moveBoxBack() {

    if (position !== 0) {

    position -=1;
    box.style.left = position + "px";

    }
    
}

const button = document.getElementById('myButton');
const button2 = document.getElementById('myButton2');
const reset = document.getElementById('resetButton');

button.addEventListener('click', function() {
    let time = setInterval(moveBox, 5);
    moveBox();
})

button2.addEventListener('click', function() {
    let time = setInterval(moveBoxBack, 5);
    moveBoxBack();
})

reset.addEventListener('click', function() {
    location.reload();
})

