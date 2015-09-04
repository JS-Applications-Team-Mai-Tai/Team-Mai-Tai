import {CURRENCY_TYPE} from 'js/whereMagicHappens/currencies/currency-type.js';

var Currency = (function () {
    function Currency() {
        this.value = 1;
        this.type = CURRENCY_TYPE.COIN;
    }

    return Currency;
}());

export {Currency}
