// Detecting button pressed

$("img").click((e) => {

    makeChoiseEffect(e.target);

    computerRandomChoise(Number(e.target.id));

})



// Make Choise Effect

function makeChoiseEffect(Choise) {
    
    let audio = new Audio("sounds/snare.mp3");
    audio.play();

    $(Choise).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

// computer Random Choise

function computerRandomChoise(id) {
    let num = Math.floor(Math.random() * 3);
    $("#computer-choise").html(`<img id="scissors" src="images/${num}.png">`);

    if ( id === num ) {
        $("h1").text("Draw in this game, better luck next time.");
    } else if (id === 0 && num === 1 || id === 1 && num === 2 || id === 2 && num === 0) {
        $("h1").text("Human lose in this game, better luck next time.");
    } else {
        $("h1").text("Oh yeah, you win in this game.");
    }

    $("#human-chosse-area").html(`<img id="scissors" src="images/${id}.jpg">`);
}

