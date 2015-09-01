function signUp(usernameTextFieldId, passwordTextFieldId) {
    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    if (username.length < constants.usernameValidations.minLengthName || password.length < constants.usernameValidations.maxLengthName) {
        console.error('Username and password are invalid');
    }

    var currentUser = Parse.User.current();
    if (currentUser) {
        Parse.User.logOut();
    }

    Parse.User.signUp(username, password, {
        imagesToGuess: []

    });
    $('#userName').html(username);
    $('#log-in').hide();
    $('#log-out').show();
    $('#sign-up').hide();
}