import {CURRENCY_TYPE} from './currency-type.js';

var Currency = (function (parent) {
    function Currency() {
        this.value = 1;
        this.type = CURRENCY_TYPE.COIN;
    }

    Currency.prototype = Object.create(parent.prototype);

    return Currency;
}());

export {Currency}
