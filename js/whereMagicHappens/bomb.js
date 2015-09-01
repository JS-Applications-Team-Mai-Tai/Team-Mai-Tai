/**
 * Created by bianka on 9/1/15.
 */

var bomb = (function(parent){
    var bomb = Object.create(parent);
    bomb.init = function(price){
        parent.init.call(this, price);
        this.type = 'bomb';
        return this;
    }

    bomb.prompt = function(){
        //bomb should delete five chars of all chars suggested for guessing a word

    }

    bomb.toString = function(){
        var base = parent.toString().call(this);
        return base;
    }

    return bomb;
}(joker));