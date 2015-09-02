var Game = (function(mode, enemy, wordToDraw) {
    function Game(mode, enemy){
        var _mode,
            _enemy,
            _myturn;
        this._mode = mode;
        this._enemy = enemy;
        this._myturn = true;
    }

    Game.prototype.getWord = function(){
        var _wordToDraw;
        //random word to come here
        return _wordToDraw;

<<<<<<< Updated upstream
=======
    }

    Game.prototype.start = function(){
        var wordToDraw = this.getWord();
        //wordToDraw.shuffle();
        wordToDraw = 'jobs'; //TODO

        System.import('./js/controllers/DrawingController.js').then(function(){
           createArtSpace();
        });
        var template = $('#art-space-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var gameStage = compiledTemplate;
        var page = $('#main-content');
        page.html('');
        page.append(gameStage);
    };

>>>>>>> Stashed changes
    Object.defineProperty(Game.prototype, 'mode', {
        get : function(){
            return this._mode;
        },
        set : function(value){
            //validate - modes are 'Classic' & 'Challange'(not neccessary will be implemented)
            this._mode = value;
        }
    });

    Object.defineProperty(Game.prototype, 'enemy', {
        get : function(){
            return this._enemy;
        },
        set : function(value){
            //validate - it will be validated before that so I'm not sure
            this._enemy = value;
        }
    });

    Object.defineProperty(Game.prototype, 'myturn',{
        get : function(){
            return this._myturn;
        },
        set : function(value){
            //validate
            this._myturn = value;
        }
    });

    return Game;

}());

var testGame = new Game('classic', 'vankata');
testGame.start();

System.exports = Game;