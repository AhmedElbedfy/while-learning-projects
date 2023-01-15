
var gamePattern = [];
var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keydown(function() {
    if (!started){
        nextSequence();
        started = true;
    }    
});

// when btn clicked call handler
$(".btn").click(clickHandler);

function nextSequence() {

    //chosse random button
    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNum];

    //save pattern in list
    gamePattern.push(randomChosenColor);

    //next sequence button flash
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //next sequence color sound
    playSound(randomChosenColor);

    //updata header text
    $("h1").text("Level " + level);
    
    //level increment
    level++;

}

function clickHandler(e) {
    //when i click with mouse on one of the buttons

    var userChosenColor = e.target.id;

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    var currentLvl = userClickedPattern.length - 1;
    checkAnswer(currentLvl);

}

function playSound(name) {
    var colorSoundPath = ("sounds/" + name + ".mp3");
    var ColorSound = new Audio(colorSoundPath);
    ColorSound.play();
}

function animatePress(currentColor) {
    var currentColorId = "#" + currentColor;
    $(currentColorId).addClass("pressed");
    setTimeout(function () { $(currentColorId).removeClass("pressed") }, 100);
}

function checkAnswer(currentLvl) {
    // >>> ??

    if (gamePattern[currentLvl] == userClickedPattern[currentLvl]) {
        console.log("success");
    } else {
        console.log("wrong");
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");

        setTimeout(function () { $("body").removeClass("game-over") }, 200);
        
        startOver();

    }

    if (gamePattern.length == userClickedPattern.length) {
        userClickedPattern = [];
        setTimeout(nextSequence(), 1000);
    }

}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;
    detectKeyToStart();
}
