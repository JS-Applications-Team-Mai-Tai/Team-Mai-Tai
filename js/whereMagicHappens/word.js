/**
 * Created by bianka on 9/1/15.
 */
var Word = (function(){
    function Word(strValue, difficulty, category){
        var _strValue,
            _difficulty,
            _category;
        this.strValue = _strValue;
        this.difficulty = _difficulty;
        this.category = _category;
    }

    Word.Prototype.goGetGuessed() = function(){
      //send the word to the game stage to be drawn&guessed?
    };

    Object.defineProperty(Word.Prototype, 'strValue',{
        get : function(){
            return this._strValue;
        },
        set : function(value){
            //validation
            this._strValue = value;
        }
    });

    Object.defineProperty(Word.Prototype, 'difficulty',{
        get : function(){
            return this._difficulty;
        },
        set : function(value){
            //validation
            this._difficulty = value;
        }
    });

    Object.defineProperty(Word.Prototype, 'category',{
        get : function(){
            return this._category;
        },
        set : function(value){
            //validation
            this._category = value;
        }
    });

    return Word;
}());
