function showGameDetails(user) {
    var currentUser = Parse.User.current();
    var mainContent =  $('#main-content');
    if(!currentUser) {
        mainContent.html('You must be logged in to see this page');
        return;
    }

    var template = $('#game-details-template').html();
    var compiledTemplate = Handlebars.compile(template);
    var currentUserGames = JSON.parse(localStorage.getItem(currentUser.get('username')));
    console.log(currentUserGames);

    if(!currentUserGames) {
        mainContent.append($('<div/>').html('An error occurred while fetching your game with this player'));
    }

    debugger;

    var gameDetails = compiledTemplate({
        imagesToGuess: currentUserGames
    });
    
    mainContent.append($('<div/>').html(gameDetails));
}