import Joker from 'js/whereMagicHappens/jokers/joker.js';

var Hint = (function(parent){
    function Hint(price) {
        parent.call(this, price);
        this._type = JOKER_TYPE.HINT;
    }

    Hint.prototype = parent.prototype;

    Object.defineProperties(Hint.prototype, {
        prompt: {
            value: function () {

            }
        }
    });

    return Hint;
}(Joker));

System.exports = Hint;