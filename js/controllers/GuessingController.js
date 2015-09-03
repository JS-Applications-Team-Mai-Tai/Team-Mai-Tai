function manageGuessing(gameId) {
    if (!Parse.User.current().get('games')[gameId].myTurn) {
        var word = $('#btn-guess').attr('data-id');
        $('#btn-guess').on('click', function () {
            var input = $('#guess').val();
            if (input === word) {
                alert('Wow you guessed it');
                var gameIndex = window.location.hash.split('/')[2];
                var imageIndex = $('#btn-guess').parent().parent().attr('data-id');
                var games = Parse.User.current().get('games');
                games[gameIndex].myTurn = true;
                if(!games[gameIndex].points) {
                    games[gameIndex].points = 1;
                } else {
                    games[gameIndex].points += 1;
                }
                games[gameIndex].images.splice(imageIndex, 1);
                Parse.User.current().save('games', games);
            } else {
                alert('Wrong guess');
            }
        });

        createArtSpace(gameId);
    }
}

export {manageGuessing}