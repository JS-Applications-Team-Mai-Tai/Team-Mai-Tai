import Game from 'js/whereMagicHappens/game.js';

function createNewGame() {
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('imagesToGuess');
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

        var newGame = new Game('classic', possibleEnemy);
        newGame.start();
        alert(JSON.stringify(newGame));
        // Add game to player
        // Add game to enemy
        // Update games at database
        console.log(possibleEnemy);
    });

    var mode = 'classic'; //we should get the value from the button

    //var newGame = new Game(mode, enemy);

}