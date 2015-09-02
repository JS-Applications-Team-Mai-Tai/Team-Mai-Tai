import Joker from 'js/whereMagicHappens/jokers/joker.js';

var Bomb = (function (parent) {
    function Bomb(price) {
        parent.call(this, price);
        this._type = JOKER_TYPE.BOMB;
    }

    Bomb.prototype = parent.prototype;

    var bomb = Object.create(parent);
    bomb.init = function (price) {
        parent.init.call(this, price);
        this.type = 'bomb';
        return this;
    };

    Object.defineProperties(Bomb.prototype, {
        prompt: {
            value: function () {

            }
        }
    });

    return Bomb;
}(Joker));

System.exports = Bomb;