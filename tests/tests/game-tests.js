var chai = require('../node_modules/chai/chai.js');
var expect = chai.expect;

import {Game} from '../../js/whereMagicHappens/game.js';

describe("#Game", function () {
    describe("constructor", function () {
        it("expect to create a game 'classic' with mode = 'classic'", function () {
            var game = new Game('Ivan', 'Vankata', 'classic');
            expect(game.mode).to.equal("classic");
        });

        it("expect to  create a game 'classic' with mode = ' '", function () {
            var game = new Game('Ivan', 'Vankata', '');
            expect(game.mode).to.equal("classic");
        });

        it("expect to  return a empty array of images", function () {
            var game = new Game('Ivan', 'Vankata', '');
            expect(game.images.length).to.equal(0);
        });

        it("expect to  return 'true' game.myTurn", function () {
            var game = new Game('Ivan', 'Vankata', '');
            expect(game.myTurn).to.equal(true);
        });
    });
    describe("constructor test player's", function () {
        it("expect create player 'Ivan' ", function () {
            var game = new Game('Ivan', 'Vankata', 'classic');
            expect(game.player).to.equal("Ivan");
        });

        //it("expect to trow exception with empty player name", function () {
        //    expect(function () {
        //        new Game('', 'Vankata', 'classic')
        //    }).to.throw();
        //});

        it("expect create enemy 'Vankata' ", function () {
            var game = new Game('Ivan', 'Vankata', 'classic');
            expect(game.enemy).to.equal("Vankata");
        });

        //it("expect to trow exception with empty enemy name", function () {
        //    expect(function () {
        //        new Game('Pesho', '', 'classic')
        //    }).to.throw();
        //});
    });
});