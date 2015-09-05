import {Game} from '../whereMagicHappens/game.js';

var generateId = function () {
    var separator = '_';

    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + separator + S4() + separator + S4() + separator + S4() + separator + S4() + S4() + S4());
};

function createNewGame() {
    var success = true;
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('games');
    var currentEnemies = [];
    currentUserGames.forEach(function (game) {
        var user = game.player === Parse.User.current().get('username') ? game.enemy : game.player;
        currentEnemies.push(user);
    });

    var allUsersQuery = new Parse.Query(Parse.User);
    var allUsers = [];

    allUsersQuery.each(function (user) {
        allUsers.push(user);
    }).then(function () {
        while (true) {
            if (allUsers.length - 1 === currentUserGames.length) {
                alert('Your game was not created. You are currently playing with all available users');
                succcess = false;
                return;
            }

            var randomIndex = Math.floor(Math.random() * allUsers.length);
            var possibleEnemy = allUsers[randomIndex];
            var isSameUser = possibleEnemy.get('username') === currentUser.get('username'),
                hasGameWithUser = currentEnemies.some(function (enemy) {
                    return enemy === possibleEnemy.get('username');
                });

            if (!(hasGameWithUser || isSameUser)) {
                break;
            }
        }

        // Create a new game
        var currentPlayerGame = new Game(currentUser.get('username'), possibleEnemy.get('username'));
        currentPlayerGame.id = generateId();
        var enemyGame = new Game(possibleEnemy.get('username'), currentUser.get('username'));
        enemyGame.word = currentPlayerGame.word;
        enemyGame.id = currentPlayerGame.id;
        enemyGame.myTurn = false;

        // Add game to player
        currentUserGames.push(currentPlayerGame);

        // Add game to enemy
        var enemyGames = possibleEnemy.get('games') || [];
        enemyGames.push(enemyGame);

        localStorage.setItem(possibleEnemy.get('username'), JSON.stringify(enemyGames));

        // Update games at database
        currentUser.save('games', currentUserGames);

        // Update the local storage
        localStorage.setItem(currentUser.get('username'), JSON.stringify(currentUserGames));
    }).then(function () {
        if (success) {
            alert('Your game was successfully created!');
        }
    });
}

export {createNewGame}
