import Joker from 'js/whereMagicHappens/jokers/joker.js';

var Pass = (function(parent){
    function Pass(price) {
        parent.call(this, price);
        this._type = JOKER_TYPE.PASS;
    }

    Pass.prototype = parent.prototype;

    Object.defineProperties(Pass.prototype, {
        prompt: {
            value: function () {

            }
        }
    });

    return Pass;
}(Joker));

System.exports = Pass;