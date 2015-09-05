var WordGenerator = (function () {
    function WordGenerator() {
        this.database = JSON.parse(localStorage.getItem('words'));
    }

    WordGenerator.prototype.next = function () {
        var numberOfWords = this.database.length;
        var randomIndex = Math.floor(Math.random() * numberOfWords);
        return this.database[randomIndex];
    };

    return WordGenerator;
}());

export {WordGenerator}