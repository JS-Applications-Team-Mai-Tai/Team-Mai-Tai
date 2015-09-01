var hint = (function(parent){
    var hint = Object.create(parent);
    hint.init = function(price){
        parent.init.call(this, price);
        this.type = 'hint';
        return this;
    }
    hint.prompt = function(){
        //hint should place one/two chars of the word in their right places

    }
    hint.toString = function(){
        var base = parent.toString().call(this);
        return base;
    }
    return hint;
}(joker));