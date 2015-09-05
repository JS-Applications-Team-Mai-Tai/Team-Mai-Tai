function createArtSpace(gameId) {
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('games');
    var currentGame;
    for(var i = 0, len = currentUserGames.length; i < len; i += 1) {
        var currentGameToCheck = currentUserGames[i];
        if(currentGameToCheck.id === gameId) {
            currentGame = currentGameToCheck;
            break;
        }
    }

    if (currentGame.myTurn) {
        $('#simple_sketch').sketch({
            defaultColor: constants.colors.initial
        });
    }
}

function download() {
    var pngUrl = document.getElementById('simple_sketch').toDataURL();
    var hashComponents = window.location.hash.split('/');
    var gameId = hashComponents[2];
    var gameIndex = -1;
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('games');
    var currentGame;
    for(var i = 0, len = currentUserGames.length; i < len; i += 1) {
        var currentGameToCheck = currentUserGames[i];
        if(currentGameToCheck.id === gameId) {
            currentGame = currentGameToCheck;
            gameIndex = i;
            break;
        }
    }

    currentUserGames[gameIndex].myTurn = false;
    currentUser.save('games', currentUserGames);

    var enemy = currentUser.get('username') === hashComponents[3] ? hashComponents[5] : hashComponents[3];
    var enemyGames = JSON.parse(localStorage.getItem(enemy));
    for (i = 0; i < enemyGames.length; i += 1) {
        var currentEnemyGame = enemyGames[i];
        if (currentEnemyGame.id === gameId) {
            enemyGames[i].images.push({
                base64String: pngUrl,
                is: currentEnemyGame.word._value,
                letters: currentEnemyGame.word._value.length
            })
        }
    }

    localStorage.setItem(enemy, JSON.stringify(enemyGames));
    alert('Drawing successfully sent');
}

export {createArtSpace, download}
