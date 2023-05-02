"use strict";

const drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", () => {
        updateUI(drum)
        makeSound(drum.innerHTML)
    }
    )
    document.addEventListener("keydown", (event) => {
        if (event.key === drum.innerHTML) {
            updateUI(drum)
            makeSound(drum.innerHTML)
        }
    }
    )
})

function updateUI(drumReference) {
    drumReference.classList.add("pressed")
    setTimeout(() => {
        drumReference.classList.remove("pressed")
    }, 100)
}

function makeSound(letter) {
    let letterSound = new Audio();
    switch (letter) {
        case 'w':
            letterSound.src = "sounds/tom-1.mp3"
            break;
        case 'a':
            letterSound.src = "sounds/tom-2.mp3"
            break;
        case 's':
            letterSound.src = "sounds/tom-3.mp3"
            break;
        case 'd':
            letterSound.src = "sounds/tom-4.mp3"
            break;
        case 'j':
            letterSound.src = "sounds/crash.mp3"
            break;
        case 'k':
            letterSound.src = "sounds/kick-bass.mp3"
            break;
        case 'l':
            letterSound.src = "sounds/snare.mp3"
            break;
    }
    letterSound.play();
}