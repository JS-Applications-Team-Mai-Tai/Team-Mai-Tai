function showGames() {
    var currentUserImagesToGuess = Parse.User.current().get('imagesToGuess');
    console.log(currentUserImagesToGuess);
    if (currentUserImagesToGuess.length === constants.initialStateOfGuess.initial) {
        $('#my-turn').append('You have no images to guess. Send one to a friend!');
    } else {
        var template = $('#my-images-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var html = compiledTemplate({
            imagesToGuess: currentUserImagesToGuess
        });

        $('#my-turn').append(html);
    }
}