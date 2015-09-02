import JOKER_TYPE from 'js/whereMagicHappens/jokers/joker-type.js';

var Joker = (function () {
    function Joker(price) {
        if (value < 0) {
            alert('Invalid joker price');
            // continue game for now
        }

        this._price = price;
        this._type = JOKER_TYPE.STANDARD;
    }

    Object.defineProperties(Joker.prototype, {
        prompt: {
            value: function () {

            }
        },

        toString: {
            value: function () {
                var result = 'Joker - type: ' + this._type + ', price: ' + this._price;
                return result;
            }
        }
    });

    return Joker;
}());

System.exports = Joker;