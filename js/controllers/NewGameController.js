//import Game from '.whereMagicHappens/game.js';

function createNewGame() {
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('imagesToGuess');
    var currentEnemies = [];
    currentUserGames.forEach(function (game) {
        currentEnemies.push(game.user);
    });

    var allUsersQuery = new Parse.Query(Parse.User);
    var usersLength = 0;

    var promise = new Promise(function (resolve, reject) {
        allUsersQuery.each(function (user) {
            usersLength += 1;
        })
            .then(function () {
                var isSameUser = true;
                var hasGameWithSelectedUser = true;

                for (var i = 0; i < usersLength; i += 1) {
                    var promise = new Promise(function (resolve) {
                        var randomIndex = Math.floor(Math.random() * (usersLength + 1));
                        var counter = 0;
                        allUsersQuery.each(function (user) {
                            if (counter === randomIndex) {
                                resolve(user.get('username'));
                            }

                            counter += 1;
                        });
                    });

                    promise.then(function (username) {
                        isSameUser = username === currentUser.get('username');
                        hasGameWithSelectedUser = currentEnemies.some(function (enemy) {
                            return username === enemy;
                        });


                        if (!(isSameUser || hasGameWithSelectedUser)) {
                            resolve(username);
                        }
                    });

                    if (!(isSameUser || hasGameWithSelectedUser)) {
                        break;
                    }
                }
            });
    });

    promise.then(function (username) {
        // make new game with this enemy
        console.log(username);
    });


    var mode = 'classic'; //we should get the value from the button

    //var newGame = new Game(mode, enemy);

}
