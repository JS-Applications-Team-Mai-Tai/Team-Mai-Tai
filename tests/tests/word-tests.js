var chai = require('../node_modules/chai/chai.js');
var expect = chai.expect;
import {Word} from '../../js/whereMagicHappens/word.js';
import {WordShuffler} from '../../js/whereMagicHappens/utils/word-shuffler.js';

describe('#Word', function () {
    it('expects to be object', function () {
        var actual = typeof(new Word('wolf', 'easy', 'animals'));
        var expected = typeof {};
        expect(actual).to.equal(expected);
    });

    it('expects the value of the word to be wolf', function () {
        var obj = new Word('wolf', 'easy', 'animals');
        var expected = 'wolf';
        var actual = obj.value;
        expect(actual).to.equal(expected);
    });

    it('expects the difficulty to be easy', function () {
        var obj = new Word('wolf', 'easy', 'animals');
        var expected = 'easy';
        var actual = obj.difficulty;
        expect(actual).to.equal(expected);
    });

    it('expects the category to be animal', function () {
        var obj = new Word('wolf', 'easy', 'animals');
        var expected = 'animals';
        var actual = obj.category;
        expect(actual).to.equal(expected);
    });

    it('expects to throw when value is not a string', function () {
        expect(function () {
            new Word({}, 'easy', 'animals')
        }).to.throw();
    });

    it('expects to throw when value is null', function () {
        expect(function () {
            new Word(null, 'easy', 'animals')
        }).to.throw();
    });

    it('expects to throw when value is less than 3 characters', function () {
        expect(function () {
            new Word('_', 'easy', 'animals')
        }).to.throw();
    });

    it('expects to throw when difficulty is []', function () {
        expect(function () {
            new Word('pesho', [], 'animals')
        }).to.throw();
    });

    it('expects to throw when difficulty is pesho', function () {
        expect(function () {
            new Word('pesho', 'pesho', 'animals')
        }).to.throw();
    });

    it('expects to throw when difficulty is null', function () {
        expect(function () {
            new Word('pesho', null, 'animals')
        }).to.throw();
    });

    it('expects to throw when category is not a string', function () {
        expect(function () {
            new Word('pesho', 'easy', [])
        }).to.throw();
    });

    it('expects to throw when category is null', function () {
        expect(function () {
            new Word('pesho', 'easy', undefined)
        }).to.throw();
    });

    it('expects to throw when category is less than 3 characters', function () {
        expect(function () {
            new Word('pesho', 'easy', 'sp')
        }).to.throw();
    });
});
