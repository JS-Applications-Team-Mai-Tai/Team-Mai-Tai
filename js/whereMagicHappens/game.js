var Game = (function(mode, enemy) {
    function Game(mode, enemy){
        var _mode,
            _enemy,
            _myturn;
        this._mode = mode;
        this._enemy = enemy;
        this._myturn = true;
    }

    //Game.Prototype.start = function(){};

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

System.exports = Game;