/**
 * Created by Hristo on 9/2/2015.
 */
if (!String.prototype.shuffle) {
    String.prototype.shuffle = function () {
        var currentWord = this.split(''),
            length = currentWord.length;

        for (var index = length - 1; index > 0; index -= 1) {
            var randomIndex = Math.floor(Math.random() * (index + 1));
            var swapChar = currentWord[index];
            currentWord[index] = currentWord[randomIndex];
            currentWord[randomIndex] = swapChar;
        }
        return currentWord.join('');

    }
}
