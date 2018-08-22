console.log("I am linked!");

var gameStarted = false;

var possibleWords = ["cat", "dog"];
var guesses = [];
var wrongGuesses = [];
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

        // Check for legal letter guess
        console.log(event.keyCode);
        if (event.keyCode < 65 || event.keyCode > 90) {
            // key is NOT alphabetical, return early
            console.log("NOT A LETTER ERIC!")
        }

        // Check for letter already guessed, return early if so

        // See if letter is in chosen word

        // If so, update word, and check for win

        // If not, decrement guesses, add letter to wrong guesses


        // TODO: Restart the game, update wins/losses




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


