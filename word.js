var Letter = require("./letter.js");

function Word(userAnswer) {
    this.newLetterArr = [];
    
    for (var i = 0; i < userAnswer.length; i++) {
        var letter = new Letter(userAnswer[i]);
        this.newLetterArr.push(letter);
    }
    
    this.log = function () {
        answerStr = "";
        for (var i = 0; i < this.newLetterArr.length; i++) {
            answerStr += this.newLetterArr[i] + " ";
        }
        console.log(answerStr + "\n");
    }
    
    this.guess = function (input) {
        for (var i = 0; i < this.newLetterArr.length; i++) {
            this.newLetterArr[i].userGuess(input);
        }
    }
}

module.exports = Word;