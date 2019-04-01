
function Letter(letter) {
    this.letter = letter,
    this.isGuessed = false
  }

  Letter.prototype.toString = function() {
    if (this.isGuessed === false) {
        return '_';
        } 
        else {
            return this.letter
        }
    };

 Letter.prototype.switchORnot = function(userGuess) {
      if (userGuess === this.letter) {
      this.isGuessed = true;
      console.log("Letter guessed correctly!");
    }
    else {
        console.log("Incorrect letter!");
    }
  }

  module.exports = Letter;

