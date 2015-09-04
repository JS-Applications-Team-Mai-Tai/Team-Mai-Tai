import Handlebars from 'js/lib/handlebars.js';

function showGameDetails(enemy, gameId) {
    var currentUser = Parse.User.current();
    var mainContent = $('#main-content');
    if (!currentUser) {
        mainContent.html('You must be logged in to see this page');
        return;
    }

    var games = currentUser.get('games');
    var game = games[gameId];
    games[gameId].level = Math.floor(game.points / 2);
    Parse.User.current().save('games', games);


    if (!game.myTurn && game.images.length === 0) {
        mainContent.html($('<h3/>').html("It's their turn! While you wait, why not play another game?"));
    }

    var template = $('#game-details-template').html();
    var compiledTemplate = Handlebars.compile(template);

    var gameDetails = compiledTemplate(game);

    mainContent.append($('<div/>').html(gameDetails));
}

export {showGameDetails}