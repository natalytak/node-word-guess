var inquirer = require("inquirer");
var Word = require("./word.js");

var animals = ["koala", "elephant", "walrus", "hedgehog", "hamster", "mongoose", "monkey", 
"dolphin", "lynx", "rhynoceros", "antelope", "giraffe", "tiger", "gorilla", "armadillo", 
"flamingo", "penguin", "hummingbird", "anaconda", "chameleon", "hammerhead", "lion", 
"catfish", "octopus", "lobster", "dragonfly"];

var randomIndex = Math.floor(Math.random() * animals.length);
var randomWord = animals[randomIndex];

computerWord = new Word(randomWord);

var pickWord = false;
var correctLetters = [];
var guessesLeft = 10;

function check() {
    if (pickWord === true) {
        randomIndex = Math.floor(Math.random() * animals.length);
        randomWord = animals[randomIndex];
        computerWord = new Word(randomWord);
        pickWord = false;
    }

    var wordComplete = [];
    computerWord.newLetterArr.forEach(completeCheck);
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter!",
                    name: "userinput"
                }
            ])
            .then(function (inquirerResponse) {
                yourGuess = inquirerResponse.userinput;
                        
                        var wordCheckArray = [];
                        computerWord.guess(yourGuess);
                        computerWord.newLetterArr.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nINCORRECT!\n");
                            computerWord.log();
                            guessesLeft--;
                            console.log("Guesses Left: " + guessesLeft + "\n");
                        } else {
                            console.log("\nCORRECT!\n");
                            computerWord.log();
                            correctLetters.push(yourGuess);
                        }

                        if (guessesLeft > 0) {
                            check();
                        } else {
                            console.log("YOU LOST!\n");
                            reset();
                        }

                        function wordCheck(key) {
                            wordCheckArray.push(key.isGuessed);
                        }
                    }
            )
    } else {
        console.log("YOU WON! CONGRATS!\n");
        reset();
    }

    function completeCheck(key) {
        wordComplete.push(key.isGuessed);
    }
}

function reset() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do now?",
                choices: ["Play Again", "Exit"],
                name: "reset"
            }
        ])
        .then(function (input) {
            if (input.reset === "Play Again") {
                pickWord = true;
                correctLetters = [];
                guessesLeft = 10;
                check();
            } else {
                return
            }
        })
}

check();