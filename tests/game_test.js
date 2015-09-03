var expect = chai.expect;

describe("Game", function() {
    describe("constructor", function () {
        it("should create a game 'classic' with mode = 'classic'", function () {
            var game = new Game('Ivan', 'Vankata','classic');
            console.log(game);
            expect(game.mode).to.equal("classic");
        });

        it("should create a game 'classic' with mode = ' '", function () {
            var game = new Game('Ivan', 'Vankata','');
            console.log(game);
            expect(game.mode).to.equal("classic");
        });
    });
});