var chai = require('../node_modules/chai/chai.js');
var expect = chai.expect;
import {Word} from '../../js/whereMagicHappens/word.js';
import {WordShuffler} from '../../js/whereMagicHappens/utils/word-shuffler.js';

describe('#WordShuffler', function () {

    it('expects to be an object', function () {
        var wordShuffler = new WordShuffler();
        var actual = typeof (wordShuffler);
        var expected = typeof ({});
        expect(actual).to.equal(expected);

    });


    it('expects to shuffle the base value of the word', function () {
        var word = new Word('wolf', 'easy', 'animals');
        var shuffler = new WordShuffler();
        var actual = shuffler.start(word);
        var expected = 'wolf';
        expect(actual).not.to.equal(expected);
    });

    it('expects to return a string value with 14 chars length', function () {
        var word = new Word('wolf', 'easy', 'animals');
        var shuffler = new WordShuffler();
        var actual = shuffler.start(word).value.length;
        var expected = 14;
        expect(actual).to.equal(expected);
    });
});