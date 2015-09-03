function createArtSpace() {
    $('#simple_sketch').sketch({
        defaultColor: constants.colors.initial
    });

    //return this;
}

function download() {
    var pngUrl = document.getElementById('simple_sketch').toDataURL();
    var hashComponents = window.location.hash.split('/');
    var gamePseudoId = hashComponents[2];
    var currentUser = Parse.User.current().get('username');
    var gameId = Parse.User.current().get('games')[gamePseudoId].id;
    var enemy = currentUser === hashComponents[3] ? hashComponents[5] : hashComponents[3];
    var enemyGames;
    var userEnemy = new Parse.Query(Parse.User).equalTo('username', enemy).each(function (item) {
        enemyGames = item.get('games');
    }).then(function () {
        for(var i = 0; i < enemyGames.length; i += 1) {
            var currentEnemyGame = enemyGames[i];
            if(currentEnemyGame.id === gameId) {
                enemyGames[i].myTurn = false;// TODO: should actually be set to true
                enemyGames[i].images.push({
                    base64String: pngUrl,
                    is: 'bla-bla for now'
                })
            }
        }

        localStorage.setItem(enemy, JSON.stringify(enemyGames));
    });
}
