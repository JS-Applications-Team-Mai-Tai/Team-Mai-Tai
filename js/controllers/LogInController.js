function logIn(usernameTextFieldId, passwordTextFieldId) {
    if (Parse.User.current()) {
        Parse.User.logOut();
    }

    var username = $(usernameTextFieldId).val(),
        password = $(passwordTextFieldId).val();

    validator.validateUserNameAndPassword(username, password);

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

            swal({
                title: "Welcome",
                text: "Hello back, " + username + "!",
                type: "success",
                confirmationButtonText: "Sweet!"
            });

        },

        error: function () {
            //alert('Invalid username or password');
            swal({
                title: "Error!",
                text: "Invalid username or password",
                type: "error",
                confirmButtonText: "Ok.."
            });
        }
    }).then(function () {
        var pendingGamesString = localStorage.getItem(Parse.User.current().get('username'));
        if (pendingGamesString) {
            var pendingGames = JSON.parse(pendingGamesString);
            Parse.User.current().save('games', pendingGames);
            localStorage.setItem(Parse.User.current().get('username'), '');
        }
    });
}

export {logIn}