var joker = (function (){
    var joker = {
        init: function(price){
            this.price = price;
            this.type = 'just joker';
            return this;
        },
        get price() {
            return this._price;
        },
        set price(value){
            //validate
            this._price = value;
        },
        prompt: function(){
          //joker can toggle all the chars
        },
        toString: function(){
            return 'Joker - type: ' + this.type + ', price: ' + this.price;
        }

    };

    return joker;
}());