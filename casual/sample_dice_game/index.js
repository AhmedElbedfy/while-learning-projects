function changeDice() {
    
    // get random number for both dice
    var diceNum1 = Math.floor((Math.random() * 6) + 1); // console.log(diceNum1);
    var diceNum2 = Math.floor((Math.random() * 6) + 1); // console.log(diceNum2);
    
    // get the right place for both dice
    var changeName1 = "images/dice" + diceNum1 + ".png";
    var changeName2 = "images/dice" + diceNum2 + ".png";
    
    // winner situation
    if (diceNum1 > diceNum2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (diceNum1 < diceNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    
    // change img name after refresh
    document.querySelector(".img1").src = changeName1;
    document.querySelector(".img2").src = changeName2;
}

changeDice();
