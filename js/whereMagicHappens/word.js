/**
 * Created by bianka on 9/1/15.
 */
var Word = (function () {
    function Word(strValue, difficulty, category) {
        //var _strValue,
        //    _difficulty,
        //    _category;
        this.strValue = strValue;
        this.difficulty = difficulty;
        this.category = category;
    }

    Word.prototype.goGetGuessed = function () {
        //send the word to the game stage to be drawn&guessed?
    };

    Object.defineProperty(Word.prototype, 'strValue', {
        get: function () {
            return this._strValue;
        },
        set: function (value) {
            //validation
            this._strValue = value;
        }
    });

    Object.defineProperty(Word.prototype, 'difficulty', {
        get: function () {
            return this._difficulty;
        },
        set: function (value) {
            //validation
            this._difficulty = value;
        }
    });

    Object.defineProperty(Word.prototype, 'category', {
        get: function () {
            return this._category;
        },
        set: function (value) {
            //validation
            this._category = value;
        }
    });

    Word.prototype.shuffle = function () {
        var currentWord = this.strValue.split(''),
            length = currentWord.length;

        for (var index = length - 1; index > 0; index -= 1) {
            var randomIndex = Math.floor(Math.random() * (index + 1)),
             swapChar = currentWord[index];
            currentWord[index] = currentWord[randomIndex];
            currentWord[randomIndex] = swapChar;
        }

        var resultWord = currentWord.join('');
        return new Word(resultWord,this.difficulty,this.category);
    };

    return Word;
}());
