console.log("I am linked!");

var gameStarted = false;

var possibleWords = ["cat", "dog"];
var guessesLeft = 6;
var currentWord = "";
var wins = 0;
var losses = 0;

// listen for a key to start the game
document.onkeyup = function (event) {
    if (gameStarted) {
        console.log("Game is already under way");
        // Once the game is started:

        // Array of words to choose from
        // Set guesses to [number]
        // Set wins/losses/games played

        // Pick a random word

        // Once word is chosen, enter an infinite loop of waiting for use guesses

        // On guess, check to see if it's correct or not

        // Display updated word if it's right, add guess to wrong answers if it's wrong

        // Am I out of guesses? If so, end game

    } else {
        beginGame();
    }

}

function beginGame() {
    console.log("The game has started!");
    document.getElementById("gameinfo").textContent = "The game has started!";
    gameStarted = true;
}


