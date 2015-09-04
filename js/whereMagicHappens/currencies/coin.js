import {Currency} from 'js/whereMagicHappens/currencies/currency.js';

var Coin = (function () {
    function Coin() {
        Currency.call(this);
    }

    Coin.prototype = Object.create(Currency.prototype);

    return Coin;
}());

export {Coin}