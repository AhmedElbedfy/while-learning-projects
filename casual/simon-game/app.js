"use strict";

/* ------------------------------- Game States ------------------------------ */
let gamePattern = [];
let userPattern = [];
let gameOver = false;

/* ---------------------------- Helpers Functions ---------------------------- */
// Helper function --> handleGameOver
function handleGameOver() {
    // update Game States
    gameOver = true;
    gamePattern = []

    // update UI
    clickEffect("body", "game-over")

    // Make game over sound
    makeSoundEffect("wrong")

}

// Helper function --> clickEffect update UI to make the click effect
function clickEffect(element, cssClass = "pressed") {
    $(element).addClass(cssClass)
    setTimeout(() => { $(element).removeClass(cssClass) }, 100)
}


// Helper function --> makeSoundEffect
function makeSoundEffect(soundSrcName) {
    let sound = new Audio(`sounds/${soundSrcName}.mp3`)
    sound.play()
}

// Helper function --> nextPattern
function nextPattern() {
    // make sure the game state in the right condition to play
    gameOver = false;
    userPattern = [];

    // chose random number for the next pattern
    const randomChoice = Math.floor(Math.random() * 4);

    // update UI, make sound and add the pattern to game states
    clickEffect($(".btn")[randomChoice])
    makeSoundEffect($(".btn")[randomChoice].id)
    gamePattern.push($(".btn")[randomChoice].id)
}

/* ----------------------------- Action Handlers ---------------------------- */
function newGameHandle() {
    if (gameOver || gamePattern.length === 0) {
        $("h1").text(`Level ${gamePattern.length + 1}`)
        nextPattern()
    }
}


function handleButtonClick(e) {
    // update the UI && make the button sound
    clickEffect(e.currentTarget)
    makeSoundEffect(e.currentTarget.id)

    // add the clicked button to the pattern of the user
    // to compare it with the game pattern
    userPattern.push(e.currentTarget.id)

    // compare the user pattern with the game pattern
    for (let [index, pattern] of userPattern.entries()) {
        if (pattern !== gamePattern[index]) handleGameOver()
    }

    // check if the game pattern is equal to the user pattern 
    // go to the next pattern in the game (next level)
    if (gamePattern.length === userPattern.length) {
        $("h1").text(`Level ${gamePattern.length + 1}`) // update the heading word
        nextPattern();
    }
}

/* ---------------------------- Events listeners ---------------------------- */
// Push any button to start the game or restart the game
$(document).keydown(newGameHandle)

// handle when a button clicked
$(".btn").click(handleButtonClick)


