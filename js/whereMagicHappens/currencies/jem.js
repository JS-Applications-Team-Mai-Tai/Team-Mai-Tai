import Currency from 'currency.js';
var Jem = (function (parent) {

    function Jem(price) {
        parent.call(this,price);
        validator.validateJemInitPrice(price);
        this.initialValue = CURRENCY_TYPE.JEM;
    }

    Jem.prototype = Object.create(parent.prototype);
    Jem.prototype.canBuy = [canBuyTypes.pass];

    return Jem;
}(Currency));

System.exports = Jem;