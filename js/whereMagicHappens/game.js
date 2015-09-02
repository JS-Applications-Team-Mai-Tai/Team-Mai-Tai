var Game = (function() {
    function Game(player, enemy, mode){
        this._mode = mode || 'classic';
        this._player = player;
        this._enemy = enemy;
        this.images = [];
        this._myturn = true;
    }

    Game.prototype.getWord = function(){
        var _wordToDraw;
        //random word to come here
        return _wordToDraw;

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

    Object.defineProperty(Game.prototype, 'mode', {
        get : function(){
            return this._mode;
        },
        set : function(value){
            //validate - modes are 'Classic' & 'Challenge'(not necessary will be implemented)
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

    Object.defineProperty(Game.prototype, 'player', {
        get : function(){
            return this._player;
        },
        set : function(value){
            //validate - it will be validated before that so I'm not sure
            this._player = value;
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