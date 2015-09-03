/**
 * Created by Hristo on 9/3/2015.
 */
var expect = chai.expect;

describe('#.validateUserNameAndPassword()',function(){

    it('expects to be a function',function(){
        var actual = typeof (validator.validateUserNameAndPassword);
        var expected = typeof (function(){});
        expect(actual).to.equal(expected);
    });

    it('expects to throw in the console',function(){
        var actual = validator.validateUserNameAndPassword('Al','24');
        var expected = console.log('Username and password are invalid');
        expect(actual).to.equal(expected);
    });

});

describe('#.validatePriceOfJem()',function(){

    it('expects to be a function',function(){
        var actual = typeof (validator.validateJemInitPrice);
        var expected = typeof (function(){});
        expect(actual).to.equal(expected);
    });

    it('expects to throw in the console if passed not valid data',function(){
        var actual = validator.validateJemInitPrice(3);
        var expected = console.log('Insufficient jems');
        expect(actual).to.equal(expected);
    });

});
