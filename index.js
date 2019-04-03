var inquirer = require("inquirer");
var color = require("colors");
var Word = require("./word.js");

var animals = ["koala", "elephant", "walrus", "hedgehog", "hamster", "mongoose", "monkey", 
"dolphin", "lynx", "rhynoceros", "antelope", "giraffe", "tiger", "gorilla", "armadillo", 
"flamingo", "penguin", "hummingbird", "anaconda", "chameleon", "hammerhead", "lion", 
"catfish", "octopus", "lobster", "dragonfly"];

var randomWord = animals[Math.floor(Math.random() * animals.length)];
var newWord = new Word(randomWord);
var pickWord = false;
var correctLetters = [];
var guessesLeft = 10;

function pickMyWord() {
    if (pickWord === true) {
        randomWord = animals[Math.floor(Math.random() * animals.length)];
        newWord = new Word(randomWord);
        pickWord = false;
    }
}

function check() {
    pickMyWord();
    var fullWord = [];
    newWord.newLetterArr.forEach(completeCheck);
    if (fullWord.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter:".yellow,
                    name: "userInput"
                }
            ])
            .then(function (inquirerResponse) {
                yourGuess = inquirerResponse.userInput.toLowerCase();
                        
                        var wordCheckArr = [];
                        newWord.guess(yourGuess);
                        newWord.newLetterArr.forEach(wordCheck);
                        if (wordCheckArr.join('') === fullWord.join('')) {
                            console.log("\nINCORRECT!\n".red);
                            newWord.log();
                            guessesLeft--;
                            console.log("Guesses Left: " + guessesLeft + "\n");
                        } else {
                            console.log("\nCORRECT!\n".green);
                            newWord.log();
                            correctLetters.push(yourGuess);
                        }

                        if (guessesLeft > 0) {
                            check();
                        } else {
                            console.log("YOU LOST!".black.bgWhite);
                            reset();
                        }

                        function wordCheck(key) {
                            wordCheckArr.push(key.isGuessed);
                        }
                    })
    } else {
        console.log("YOU WON! CONGRATS!\n".rainbow);
        reset();
    }

    function completeCheck(key) {
        fullWord.push(key.isGuessed);
    }
}

function reset() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to play again?",
                choices: ["PLAY AGAIN", "EXIT"],
                name: "reset"
            }
        ])
        .then(function (input) {
            if (input.reset === "PLAY AGAIN") {
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