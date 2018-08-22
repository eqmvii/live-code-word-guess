console.log("I am linked!");

var gameStarted = false;

var gameOver = false;

var possibleWords = ["cheesesteak", "dog"];
var guesses = [];
var wrongGuesses = [];
var guessesLeft = 3;
var currentWord = "";
var numBlanks = 0;
var wordInProgress = "";
var wins = 0;
var losses = 0;

// listen for a key to start the game
document.onkeyup = function (event) {
    if(gameOver) {
        console.log("GAME OVER");
        return;
    }

    if (gameStarted) {
        console.log("Game is already under way");
        console.log("The word is: " + currentWord);

        // Check for legal letter guess
        if (event.keyCode < 65 || event.keyCode > 90) {
            // key is NOT alphabetical, return early
            console.log("NOT A LETTER ERIC!");
            return;
        }

        // Check for letter already guessed, return early if so
        console.log(event.key);
        if (guesses.indexOf(event.key) > -1) {
            console.log("ALREADY GUESSED ERIC!");
            return;
        }

        // Push letter to guesses array
        guesses.push(event.key);
        console.log(guesses);

        // See if letter is in chosen word
        if (currentWord.indexOf(event.key) > -1) {
            console.log("Correct guess!");

            // Update dashes with correct letter
            for(var i = 0; i < currentWord.length; i++) {
                if(currentWord[i] === event.key) {
                    console.log("Matching letter at index: " + i);
                    wordInProgress[i] = event.key;
                }
            }
            document.getElementById("currentword").textContent = wordInProgress.join("");
        } else {
            wrongGuesses.push(event.key);
            guessesLeft--;
            // Update the screen
            document.getElementById("lettersguessed").textContent = wrongGuesses.join("");
            document.getElementById("guesses").textContent = guessesLeft;
        }

        // Check for a loss
        if (guessesLeft < 1) {
            document.getElementById("gameinfo").textContent = "GAME OVER!";
            gameOver = true;
        }

        // Check for a win
        if (wordInProgress.indexOf("_") === -1) {
            document.getElementById("gameinfo").textContent = "GAME OVER -- YOU WON NICE JOB :)!";
            gameOver = true;
        }


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


