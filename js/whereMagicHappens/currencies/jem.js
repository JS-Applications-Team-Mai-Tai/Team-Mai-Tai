import {CURRENCY_TYPE} from 'js/whereMagicHappens/currencies/currency-type.js';

var Gem = (function () {
    function Gem() {
        this.value = 10;
        this.type = CURRENCY_TYPE.JEM;
    }

    return Gem;
}());

export {Gem}