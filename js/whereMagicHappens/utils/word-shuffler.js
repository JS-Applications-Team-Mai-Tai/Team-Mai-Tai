import {Word} from '../word.js';

var WordShuffler = (function () {
    function WordShuffler() {

    }

    WordShuffler.prototype.start = function (word) {
        var currentWord = word.value.split(''),
            length = currentWord.length,
            resultLength = 14,
            alphabet = 'abcdefghijklmnopqrstuvwxyz',
            delta;

        for (var index = length - 1; index > 0; index -= 1) {
            var randomIndex = Math.floor(Math.random() * (index + 1)),
                swapChar = currentWord[index];
            currentWord[index] = currentWord[randomIndex];
            currentWord[randomIndex] = swapChar;
        }

        var subtractionLength = currentWord.length;

        if (subtractionLength < resultLength) {
            delta = resultLength - subtractionLength;
            for (var i = 0; i < delta; i += 1) {
                var indexer = Math.floor(Math.random() * alphabet.length);
                currentWord.push(alphabet[indexer]);
            }
        }

        var resultWord = currentWord.join('');
        return new Word(resultWord, 'hard', 'default');
    };

    return WordShuffler;
}());

export {WordShuffler}