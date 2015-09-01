/**
 * Created by bianka on 9/1/15.
 */
var pass = (function(parent){
    var pass = Object.create(parent);
    pass.init = function(price){
        parent.init.call(this, price);
        this.type = 'pass';
        return this;
    }

    pass.prompt = function(){
        //pass is the most expensive and gives you the whole word/turn
    }

    pass.toString = function(){
        var base = parent.toString().call(this);
        return base;
    }
    
    return pass;
}(joker));