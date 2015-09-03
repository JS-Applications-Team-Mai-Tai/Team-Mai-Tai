import {logOut} from 'js/controllers/LogOutController.js';

function initialize() {
    Parse.initialize("XyNdXQeBrdwFfoy1BXvnxf5sSBfd2QdpXJUtbSh9", "lVXyZDKnKUyLfcYxW3cQghtg6dJB5Hz9Pymf00XG");
    $('#log-out')
        .on('click', function () {
            logOut();
        });

    (function () {
        if (Parse.User.current()) {
            $('#userName').html(Parse.User.current().get('username'));
            $('#log-in').hide();
            $('#log-out').show();
            $('#sign-up').hide();
            $('#user-options').show();
        } else {
            $('#user-options').hide();
        }
    }());

    localStorage.setItem('nextId', 0);
}

export {initialize}