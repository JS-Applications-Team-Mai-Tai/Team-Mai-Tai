function CreateNewGame(){
    var user = Parse.User.current();
    var currUserGames = Parse.User.current().get('imagesToGuess');
    var allUsers = new Parse.Query(Parse.User);
    var usersLenght = allUsers.length;
    var random = Math.floor(Math.random() + usersLenght);
    var username = allUsers[random];

    if(allUsers[random] === user){
        random += 1;
    }
    else if(currUserGames.equalTo(allUsers[random])){
        
    }

    var enemy = allUsers.equalTo(username);

    //create new game(user, enemy)

}
