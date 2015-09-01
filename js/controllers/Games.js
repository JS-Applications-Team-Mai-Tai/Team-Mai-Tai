function showGames() {

    var currentUserImagesToGuess = Parse.User.current().get('imagesToGuess');
    $('#newGame-btn').on('click', function(){
        System.import('NewGameController.js').then(function () {
            createNewGame(); //doesn't import/or load the file
        });
    });
    if (currentUserImagesToGuess.length === constants.initialStateOfGuess.initial) {
        var noFriends = 'You have no games. Start new game!'; ///???
        $('#myGamesWrapper').html(noFriends);
        $('#my-turn').hide();
        $('#their-turn').hide();
    } else {
        //TODO: eventually boolean to check turns & split to my turn & their turn
        var template = $('#myGamesTemplate').html();
        var compiledTemplate = Handlebars.compile(template);
        var html = compiledTemplate({
            imagesToGuess: currentUserImagesToGuess
        });

        $('#my-turn').append(html);
        $('#their-turn').hide();

    }
}