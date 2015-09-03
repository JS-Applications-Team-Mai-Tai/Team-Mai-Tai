import {CURRENCY_TYPE} from 'js/whereMagicHappens/currencies/currency-type.js';
import {Currency} from 'js/whereMagicHappens/currencies/currency.js';

var Jem = (function (parent) {
    function Jem() {
        parent.call(this);
        this.value = 10;
        this.type = CURRENCY_TYPE.JEM;
    }

    Jem.prototype = Object.create(parent.prototype);

    return Jem;
}(Currency));

export {Jem}