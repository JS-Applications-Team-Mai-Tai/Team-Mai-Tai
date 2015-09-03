import Handlebars from 'js/lib/handlebars.js';

function showGames() {
    var currentUser = Parse.User.current();
    if (!currentUser) {
        $('div .myGamesWrapper').html('You must be logged in to see this page');
    }

    var currentUserGames = Parse.User.current().get('games');
    if(currentUserGames.length === 0) {
        var template = $('#my-games-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var turnsTemplate = compiledTemplate({
            games: []
        });

        $('#main-content').html(turnsTemplate).append($('<h5/>').html('You have no games yet.'));
        return;
    }

    var games = {}; // is this used anywhere?
    var myTurns = [];
    var theirTurns = [];
    currentUserGames.forEach(function (game) {
        var user = game.player === Parse.User.current().get('username') ? game.enemy : game.player;
        games[user] = game.images;
        if (game.myTurn) {
            myTurns.push(game)
        }
        else {
            theirTurns.push(game);
        }
    });


    localStorage.setItem(currentUser.get('username'), JSON.stringify(currentUserGames));
    if (currentUserGames.length === constants.initialStateOfGuess.initial) {
        var noFriends = 'You have no games. Start new game!'; ///???
        $('#myGamesWrapper').html(noFriends);
        $('#my-turn').hide();
        $('#their-turn').hide();
    } else {
        //TODO: eventually boolean to check turns & split to my turn & their turn
        var template = $('#my-games-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var turnsTemplate = compiledTemplate({
            games: currentUserGames
        });

        $('#main-content').html(turnsTemplate);

    }
}

export {showGames}