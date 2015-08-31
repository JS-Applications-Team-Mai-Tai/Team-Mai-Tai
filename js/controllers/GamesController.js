(function () {
    var currentUserImagesToGuess = Parse.User.current().get('imagesToGuess');
    if(currentUserImagesToGuess.length === 0) {
        $('#my-turn').append('You have no images to guess. Send one to a friend!');
    } else {
        var template = $('#my-images-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var html = compiledTemplate({
            imagesToGuess: currentUserImagesToGuess
        });

        $('#my-turn').append(html);
    }
}());