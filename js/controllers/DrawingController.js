function createArtSpace(gameId) {
    if (Parse.User.current().get('games')[gameId].myTurn) {
        $('#simple_sketch').sketch({
            defaultColor: constants.colors.initial
        });
    }
}

function download() {
    var pngUrl = document.getElementById('simple_sketch').toDataURL();
    var hashComponents = window.location.hash.split('/');
    var gamePseudoId = hashComponents[2];
    var currentUser = Parse.User.current().get('username');
    var gameId = Parse.User.current().get('games')[gamePseudoId].id;
    var games = Parse.User.current().get('games');
    games[gamePseudoId].myTurn = false;
    Parse.User.current().save('games', games);
    var enemy = currentUser === hashComponents[3] ? hashComponents[5] : hashComponents[3];
    var enemyGames = JSON.parse(localStorage.getItem(enemy));
    for (var i = 0; i < enemyGames.length; i += 1) {
        var currentGame = enemyGames[i];
        if (currentGame.id === gameId) {
            enemyGames[i].images.push({
                base64String: pngUrl,
                is: 'pesho'
            })
        }
    }

    localStorage.setItem(enemy, JSON.stringify(enemyGames));
    alert('Drawing successfully sent');
}
