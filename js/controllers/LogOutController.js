function logOut() {
    if(Parse.User.current()) {
        Parse.User.logOut();
        $('#log-in').show();
        $('#log-out').hide();
        $('#sign-up').show();
        $('#user-options').hide();
    } else {
        //alert('No user to log out');
        swal({
            title: 'Well...',
            text: 'You must be logged in in order to log out',
            type: 'warning',
            showConfirmButton: false,
            timer: 2000
        });
    }
}

export {logOut}