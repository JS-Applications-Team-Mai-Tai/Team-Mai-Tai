function signUp(usernameTextFieldId, passwordTextFieldId) {
    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    validator.validateUserNameAndPassword(username,password);

    var currentUser = Parse.User.current();

    validator.validateIfUserExistsToLogOut(currentUser);

    Parse.User.signUp(username, password, {
        games: []
    });

    $('#userName').html(username);
    $('#log-in').hide();
    $('#log-out').show();
    $('#sign-up').hide();
    $('#user-options').show();
}