import {Currency} from 'js/whereMagicHappens/currencies/currency.js';

var Coin = (function (parent) {
    function Coin() {
        parent.call(this);
    }

    Coin.prototype = Object.create(parent.prototype);

    return Coin;
}(Currency));

export {Coin}