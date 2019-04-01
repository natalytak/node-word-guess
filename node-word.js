var inquirer = require("inquirer");

var words = ["koala", "elephant", "walrus", "hedgehog", "hamster", "mongoose", "monkey", 
"dolphin", "lynx", "rhynoceros", "antelope", "giraffe", "tiger", "gorilla", "armadillo", 
"flamingo", "penguin", "hummingbird", "anaconda", "chameleon", "hammerhead", "lion", 
"catfish", "octopus", "lobster", "gragonfly"];
var wordDashed = [];
var wordPicked;
var userGuess;
// var wins = 0;
// var guesses = 10;
// var guessList = [];

function Words(wordPicked, isGuessed) {
  this.wordPicked = [],
  this.isGuessed = false
}

Words.prototype.switchORnot = function(userGuess) {
  for (i = 0; i < wordPicked.length; i++) {
    if (userGuess === wordPicked[i]) {
    this.isGuessed = true;
    console.log("Letter guessed correctly!");
  }
}
}

wordPicked = words[Math.floor(Math.random() * words.length)];
console.log(wordPicked);

var wordPicked1 = new Words(words[Math.floor(Math.random() * words.length)]);
var wordPicked2  = wordPicked1.slice(0).join(',');
console.log(wordPicked2);

for (i = 0; i < wordPicked.length; i++) {
  wordDashed[i] = '_';
}
   console.log(wordDashed.join(' '));
// wordPicked.switchORnot();

// function dashedName() {
//   wordPicked = words[Math.floor(Math.random() * words.length)];
//   console.log(wordPicked);
//  for (i = 0; i < wordPicked.length; i++) {
//      wordDashed[i] = '_';
//  }
//  console.log(wordDashed.join(' '))
// };
// dashedName();

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Guess a letter",
      name: "letter",
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      userGuess = inquirerResponse.letter;
      console.log("\nYou entered " + userGuess);
      // checkMyLetter();
  })

// function checkMyLetter(userGuess) {
   
//     for (i = 0; i < wordPicked.length; i++) {
//         if (userGuess === wordPicked[i]) {
//             wordDashed[i] = userGuess;
//             console.log(wordPicked);
//             console.log(wordDashed);
//             // console.log(wordDashed.join(' '));
//             console.log(wordDashed.join(' ') === wordPicked);
//         }
//     }     
//     console.log(wordPicked);
//     console.log(wordDashed.join(' '));
//     console.log(wordDashed.join(' ') === wordPicked);
//     // document.getElementById('theWord').textContent = wordDashed.join(' ');
// } }
