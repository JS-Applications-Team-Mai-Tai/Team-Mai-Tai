/**
 * Created by Hristo on 9/2/2015.
 */
var Coin = (function(parent){

    function Coin(){
        parent.call(this);
        this.initialValue = CURRENCY_TYPE.COIN;
    }

    Coin.prototype = Object.create(parent.prototype);
    Coin.prototype.canBuy = this.canBuy = [canBuyTypes.bomb,canBuyTypes.hint];

    return Coin;
}(Currency));

System.exports = Coin;