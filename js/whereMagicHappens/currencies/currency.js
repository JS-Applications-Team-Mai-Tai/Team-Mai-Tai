/**
 * Created by Hristo on 9/2/2015.
 */
var Currency = (function (Parent) {

    function Currency() {
        this.initialValue = CURRENCY_TYPE.INITIAL;
    }

    Currency.prototype = Object.create(Parent.prototype);

    return Currency;
}(function () {}));

System.exports = Currency;
