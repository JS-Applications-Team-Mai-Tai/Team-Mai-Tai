function logOut() {
    if(Parse.User.current()) {
        Parse.User.logOut();
        $('#log-in').show();
        $('#log-out').hide();
        $('#sign-up').show();
        $('#user-options').hide();
    } else {
        alert('No user to log out');
    }
}

export {logOut}