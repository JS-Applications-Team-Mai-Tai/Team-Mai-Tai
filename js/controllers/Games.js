function showGames() {
    var currentUser = Parse.User.current();
    if (!currentUser) {
        $('div .myGamesWrapper').html('You must be logged in to see this page');
    }

    var currentUserImagesToGuess = Parse.User.current().get('games');
    var games = {};
    currentUserImagesToGuess.forEach(function (game) {
        var user = game.player === Parse.User.current().get('username') ? game.enemy : game.player;
        games[user] = game.images;
    });

    localStorage.setItem(currentUser.get('username'), JSON.stringify(games));

    if (currentUserImagesToGuess.length === constants.initialStateOfGuess.initial) {
        var noFriends = 'You have no games. Start new game!'; ///???
        $('#myGamesWrapper').html(noFriends);
        $('#my-turn').hide();
        $('#their-turn').hide();
    } else {
        //TODO: eventually boolean to check turns & split to my turn & their turn
        var template = $('#my-games-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var html = compiledTemplate({
            games: currentUserImagesToGuess
        });

        $('#my-turn').append(html);
        $('#their-turn').hide();

    }
}