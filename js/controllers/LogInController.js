function logIn(usernameTextFieldId, passwordTextFieldId) {
    if (Parse.User.current()) {
        Parse.User.logOut();
    }

    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    var currentUser = Parse.User.current();
    if (currentUser) {
        Parse.User.logOut();
    }

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