//import Game from '.whereMagicHappens/game.js';

function createNewGame() {
    var user = Parse.User.current();
    var currentUserGames = Parse.User.current().get('imagesToGuess');
    var currentEnemies = [];
    $.map(currentUserGames, function (value, ind) {
        currentEnemies.push(currentUserGames[ind].user);
    });

    var allUsersQuery = new Parse.Query(Parse.User);
    //allUsersQuery.find({
        //success: function(items){
            //alert(items.length + 'users found');

        //}});
    //Parse don't get the users and enemy is undefined
    var allUsers = [];
    var usersLength = 0;
    allUsersQuery.each(function (user) {
        allUsers.push(user);
        usersLength += 1; //chak pyk konstanta
    });
    alert(allUsers.length);
    // user is a Parse.User object, allUsers.length returns 0

    // get random index and while the corresponding user matches the current user, get a new random index
    var randomIndex = Math.floor(Math.random() * (usersLength + 1));
    var desiredEnemy = allUsers[randomIndex];
    while (desiredEnemy === user || currentEnemies.indexOf(desiredEnemy) >= 0) {
        randomIndex = Math.floor(Math.random() * (usersLength + 1));
        desiredEnemy = allUsers[randomIndex];
    }

    var enemy = desiredEnemy;
    alert(JSON.stringify(enemy));

    var mode = 'classic'; //we should get the value from the button

    //var newGame = new Game(mode, enemy);

}
