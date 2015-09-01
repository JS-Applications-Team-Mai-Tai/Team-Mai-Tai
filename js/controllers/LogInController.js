function logIn(usernameTextFieldId, passwordTextFieldId) {
    if (Parse.User.current()) {
        Parse.User.logOut();
    }

    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    validator.validateUserNameAndPassword(username,password);

    var currentUser = Parse.User.current();

    validator.validateIfUserExistsToLogOut(currentUser);

    Parse.User.logIn(username, password, {
        success: function () {
            $('#log-in').hide();
            $('#log-out').show();
            $('#sign-up').hide();
            $('#name').show();
            $('#userName').html(username);
            $('#user-options').show();
            alert('Logged in!');
        },

        error: function () {
            alert('Invalid username or password');
        }
    });
}