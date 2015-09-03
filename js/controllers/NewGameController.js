import Game from 'js/whereMagicHappens/game.js';

function createNewGame() {
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
            if(allUsers.length - 1 === currentUserGames.length) {
                alert('You are now playing with all available users');
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
        currentPlayerGame.id = localStorage.getItem('nextId');
        var enemyGame = new Game(possibleEnemy.get('username'), currentUser.get('username'));
        enemyGame.id = localStorage.getItem('nextId');
        enemyGame.myTurn = false;

        localStorage.setItem('nextId', +localStorage.getItem('nextId') + 1);


        // Add game to player
        currentUserGames.push(currentPlayerGame);

        // Add game to enemy
        var enemyGames = possibleEnemy.get('games') || [];
        enemyGames.push(enemyGame);

        localStorage.setItem(possibleEnemy.get('username'), JSON.stringify(enemyGames));

        // Update games at database
        currentUser.save('games', currentUserGames);

        // Start the game
        //game.start();

        // Update the local storage
        localStorage.setItem(currentUser.get('username'), JSON.stringify(currentUserGames));
    });
}

export {createNewGame}
