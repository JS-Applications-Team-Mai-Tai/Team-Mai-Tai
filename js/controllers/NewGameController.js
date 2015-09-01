function CreateNewGame(){
    var user = Parse.User.current();
    var allUsers = new Parse.Query(Parse.User);
    var usersLenght = allUsers.length;
    var random = Math.floor(Math.random() + length);
    var username = allUsers[random];
    var enemy = allUsers.equalTo(username);

}
