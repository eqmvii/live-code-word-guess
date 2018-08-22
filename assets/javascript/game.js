console.log("I am linked!");

var gameStarted = false;

var possibleWords = ["cat", "dog"];
var guesses = [];
var guessesLeft = 6;
var currentWord = "";
var numBlanks = 0;
var wordInProgress = "";
var wins = 0;
var losses = 0;

// listen for a key to start the game
document.onkeyup = function (event) {
    if (gameStarted) {
        console.log("Game is already under way");
        console.log("The word is: " + currentWord);


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
    // pick a random word, and store it in currentWord
    currentWord = possibleWords[0]; // TODO: Use a random number here
    numBlanks = currentWord.length;

    wordInProgress = currentWord.split('');

    for (var i = 0; i < wordInProgress.length; i++) {
        wordInProgress[i] = "_";
    }

    console.log(wordInProgress);

    console.log(wordInProgress.join(""));

    // TODO: Find way to add spaces between underscores for game

    document.getElementById("currentword").textContent = wordInProgress.join("");
    document.getElementById("guesses").textContent = guessesLeft;



    // display hashes on the screen


}


