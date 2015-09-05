import {WordGenerator} from './word-generator.js';

var Game = (function () {
    function Game(player, enemy) {

        this.player = player;
        this.enemy = enemy;
        this.images = [];
        this.myTurn = true;
        this.points = 0;

        var wordGen = new WordGenerator();
        this.word = wordGen.next();
    }

    return Game;

}());

export {Game}
