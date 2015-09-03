//var expect = require('chai').expect;
var expect = chai.expect;
describe("Game", function() {
    describe("constructor", function () {
        it("should create a game 'classic' with mode = 'classic'", function () {
            var game = new Game('Ivan', 'Vankata','classic');
            expect(game.mode).to.equal("classic");
        });

        it("should create a game 'classic' with mode = ' '", function () {
            var game = new Game('Ivan', 'Vankata','');
            expect(game.mode).to.equal("classic");
        });

        it("should return a empty array of images", function () {
            var game = new Game('Ivan', 'Vankata','');
            expect(game.images.length).to.equal(0);
        });

        it("should return a true game.myTurn", function () {
            var game = new Game('Ivan', 'Vankata','');
            console.log(game);
            expect(game.myTurn).to.equal(true);
        });
    });
});