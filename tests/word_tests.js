/**
 * Created by Hristo on 9/3/2015.
 */
var expect = chai.expect;

describe('#Word',function(){
    it('expects to be object',function(){
       var actual = typeof (new Word('wolf','easy','animals'));
        var expected = typeof {};
        expect(actual).to.equal(expected);
    });

    it('expects the value of the word to be wolf',function(){
       var obj = new Word('wolf','easy','animals');
        var expected = 'wolf';
        var actual = obj.strValue;
        expect(actual).to.equal(expected);
    });

    it('expects the difficulty to be easy',function(){
       var obj = new Word('wolf','easy','animals');
        var expected = 'easy';
        var actual = obj.difficulty;
        expect(actual).to.equal(expected);
    });

    it('expects the category to be animal',function(){
        var obj = new Word('wolf','easy','animals');
        var expected = 'animals';
        var actual = obj.category;
        expect(actual).to.equal(expected);
    });

    describe('#word.shuffle()',function(){

        it('expects to be a function',function(){
           var obj = new Word('wolf','easy','animals');
            var actual = typeof (obj.shuffle);
            var expected = typeof (function(){});
            expect(actual).to.equal(expected);

        });


        it('expects to shuffle the base value of the word',function(){
            var obj = new Word('wolf','easy','animals');
            var actual = obj.shuffle();
            var expected = 'wolf';
            expect(actual).to.not.be.equal(expected);
        });

        it('expects to return a string value with 14 chars length',function(){
           var obj = new Word('wolf','easy','animals');
            var shuffledValue = obj.shuffle();
            var actual = shuffledValue.strValue.length;
            var expected = 14;
            expect(actual).to.equal(expected);
        });
    })
});
