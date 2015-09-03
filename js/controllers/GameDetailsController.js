function showGameDetails(enemy, gameId) {
    var currentUser = Parse.User.current();
    var mainContent = $('#main-content');
    if (!currentUser) {
        mainContent.html('You must be logged in to see this page');
        return;
    }

    var game = currentUser.get('games')[gameId];

    if (!game.myTurn && game.images.length === 0) {
        mainContent.html($('<h3/>').html("It's their turn! While you wait, why not play another game?"));
    }

    var template = $('#game-details-template').html();
    var compiledTemplate = Handlebars.compile(template);
    var currentUserGames = JSON.parse(localStorage.getItem(currentUser.get('username')))[enemy];

    if (!currentUserGames) {
        mainContent.append($('<div/>').html('An error occurred while fetching your game with this player'));
    }

    var gameDetails = compiledTemplate(game);

    mainContent.append($('<div/>').html(gameDetails));
}