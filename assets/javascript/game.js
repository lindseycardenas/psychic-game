var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//counters for wins, losses, guesses
var wins = 0;
var losses = 0;
var guesses = 10;

    var randomLetter = letters[Math.floor(Math.random() * letters.length)];

    console.log(randomLetter);

 //function for guesses
document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === randomLetter) {
        wins++;
    } else {
        guesses--;
    }

    if (guesses === 0) {
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}  