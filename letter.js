function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;

}
    Letter.prototype.toString = function () {
            if (this.isGuessed === false) {
                return "_";
            } else {
                return this.letter;
            }
    };
    
    Letter.prototype.userGuess = function (userGuess) {
        if (userGuess === this.letter) {
            this.isGuessed = true;
        }
    }

module.exports = Letter;