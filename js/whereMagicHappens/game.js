var Game = (function () {
    function Game(player, enemy, mode) {
        this._mode = mode || 'classic';
        this.player = player;
        this.enemy = enemy;
        this.images = [];
        this.myTurn = true;
        this.points = 0;
    }

    Game.prototype.getWord = function () {
        var _wordToDraw;
        //random word to come here
        return _wordToDraw;

    };

    Game.prototype.start = function () {
        var wordToDraw = this.getWord();
        //wordToDraw.shuffle();
        wordToDraw = 'jobs'; //TODO

        System.import('./js/controllers/DrawingController.js').then(function () {
            createArtSpace();
        });

        var template = $('#art-space-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var gameStage = compiledTemplate({
            wordToDraw: wordToDraw,
            user: this.enemy // ot this._emnemy
        });
        var page = $('#main-content');

        page.html('');
        page.append(gameStage);


    };

    Object.defineProperty(Game.prototype, 'mode', {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            //validate - modes are 'Classic' & 'Challenge'(not necessary will be implemented)
            this._mode = value;
        }
    });

    Object.defineProperty(Game.prototype, 'enemy', {
        get: function () {
            return this._enemy;
        },
        set: function (value) {
            if (!value || value === '') {
                throw new Error('Invalid enemy name');
            }

            this._enemy = value;
        }
    });

    Object.defineProperty(Game.prototype, 'player', {
        get: function () {
            return this._player;
        },
        set: function (value) {
            if (!value || value === '') {
                throw new Error('Invalid player name');
            }

            this._player = value;
        }
    });

    Object.defineProperty(Game.prototype, 'myTurn', {
        get: function () {
            return this._myTurn;
        },
        set: function (value) {
            if (typeof value !== 'boolean') {
                throw new Error('MyTurn is a boolean property');
            }

            this._myTurn = value;
        }
    });

    return Game;

}());

export {Game}
