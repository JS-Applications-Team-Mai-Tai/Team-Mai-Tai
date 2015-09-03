var Word = (function () {
    function Word(value, difficulty, category) {
        this.value = value;
        this.difficulty = difficulty;
        this.category = category;
    }

    Object.defineProperty(Word.prototype, 'value', {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if(!(typeof value === 'string')) {
                throw new Error('Value must be a string');
            }

            if(!value) {
                throw new Error('Value is required');
            }

            if(value.length < 3) {
                throw new Error('Value must be at least 3 characters');
            }

            this._value = value;
        }
    });

    Object.defineProperty(Word.prototype, 'difficulty', {
        get: function () {
            return this._difficulty;
        },
        set: function (value) {
            if(!(value === 'easy' || value === 'medium' || value === 'hard')) {
                throw new Error('Invalid difficulty');
            }

            this._difficulty = value;
        }
    });

    Object.defineProperty(Word.prototype, 'category', {
        get: function () {
            return this._category;
        },
        set: function (value) {
            if(!(typeof value === 'string')) {
                throw new Error('Value must be a string');
            }

            if(!value) {
                throw new Error('Value is required');
            }

            if(value.length < 3) {
                throw new Error('Value must be at least 3 characters');
            }

            this._category = value;
        }
    });

    return Word;
}());

export {Word}



