function CreateNewGame(){
    var user = Parse.User.current();
    var currentUserGames = Parse.User.current().get('imagesToGuess');
    var allUsersQuery = new Parse.Query(Parse.User);
    var usersLength = allUsersQuery.length;

    // get random index and while the corresponding user matches the current user, get a new random index
    var randomIndex = Math.floor(Math.random() * (usersLength + 1));
    while(allUsers[randomIndex] === user) {
        randomIndex = Math.floor(Math.random() * (usersLength + 1));
    }

    var username = allUsers[random];

    if(currentUserGames.equalTo(allUsers[random])){
        
    }

    var enemy = allUsers.equalTo(username);

    //create new game(user, enemy)

}
