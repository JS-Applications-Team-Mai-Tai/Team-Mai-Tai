import Game from 'js/whereMagicHappens/game.js';

function createNewGame() {
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('games');
    var currentEnemies = [];
    currentUserGames.forEach(function (game) {
        currentEnemies.push(game.user);
    });

    var allUsersQuery = new Parse.Query(Parse.User);
    var usersLength = 0;

    var allUsers = [];

    allUsersQuery.each(function (user) {
        allUsers.push(user);
    }).then(function () {
        while (true) {
            var randomIndex = Math.floor(Math.random() * (usersLength + 1));
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
        var game = new Game(currentUser.get('username'), possibleEnemy.get('username'));

        // Add game to player
        currentUserGames.push(game);

        // Add game to enemy
        var enemyGames = possibleEnemy.get('games') || [];
        enemyGames.push(game);

        // Update games at database
        currentUser.save('games', currentUserGames);
        possibleEnemy.save('games', enemyGames);

        // Start the game
        game.start();

        // Update the local storage
        var games = {};
        currentUserGames.forEach(function (game) {
            var user = game.player === Parse.User.current().get('username') ? game.enemy : game.player;
            games[user] = game.images;
        });
        localStorage.setItem(currentUser.get('username'), JSON.stringify(games));
    });
}

export {createNewGame}
