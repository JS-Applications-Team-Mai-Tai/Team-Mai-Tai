function logOut() {
    if(Parse.User.current()) {
        Parse.User.logOut();
        $('#log-in').show();
        $('#log-out').hide();
        $('#sign-up').show();
    } else {
        alert('No user to log out');
    }
}