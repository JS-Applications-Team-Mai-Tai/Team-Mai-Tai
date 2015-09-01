function createNewGame() {
    var user = Parse.User.current();
    var currentUserGames = Parse.User.current().get('imagesToGuess');
    var currentEnemies = [];
    $.map(currentUserGames, function (value, ind) {
        currentEnemies.push(currentUserGames.user);
    });

    var allUsersQuery = new Parse.Query(Parse.User);
    var allUsers = [];
    var usersLength = constants.users.initialValue;
    allUsersQuery.each(function (user) {
        allUsers.push(user);
        usersLength += constants.users.usersAddition;
    });
    // user is a Parse.User object, allUsers.length returns 0

    // get random index and while the corresponding user matches the current user, get a new random index
    var randomIndex = Math.floor(Math.random() * (usersLength + constants.helperValues.randomIndexStep));
    var desiredEnemy = allUsers[randomIndex];
    while (desiredEnemy === user || currentEnemies.index(desiredEnemy) >= constants.helperValues.presenceOfValueIndex) {
        randomIndex = Math.floor(Math.random() * (usersLength + constants.helperValues.randomIndexStep));
        desiredEnemy = allUsers[randomIndex];
    }

    var enemy = desiredEnemy;


    //create new game(user, enemy)

}
