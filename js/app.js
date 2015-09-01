import Sammy from './lib/sammy.js';

(function () {
    System.import('./js/controllers/LogOutController.js').then(function () {
        $('#log-out')
            .on('click', function () {
                logOut();
            })
    });

    // check if there is a logged user
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

    var app = Sammy("#main-content", function () {
        this.get('#/home', function (context) {
            this.load('./templates/home.html', function (data) {
                context.$element().html(data);
            });
        });

        this.get("#/log-in", function (context) {
            this.load('./templates/log-in.html', function (data) {
                System.import('./js/controllers/LogInController.js').then(function () {
                    context.$element().html(data);
                });
            });
        });

        this.get("#/sign-up", function (context) {
            this.load('./templates/sign-up.html', function (data) {
                System.import('./js/controllers/SignUpController.js').then(function () {
                    context.$element().html(data);
                });
            });
        });

        this.get("#/about", function (context) {
            this.load('./templates/about.html', function (data) {
                context.$element().html(data);
            });
        });

        this.get("#/my-games", function (context) {
            this.load('./templates/userGames.html', function (data) {
                context.$element().html(data);

                System.import('./js/controllers/Games.js').then(function () {
                    showGames();
                });
            });
        });

        this.get('#/art-space', function (context) {
            this.load('./templates/draw.html', function (data) {
                System.import('./js/controllers/DrawingController.js').then(function () {
                    context.$element().html(data);
                    createArtSpace();
                });
            });
        });


    });

    $(function () {
        app.run("#/art-space");
    });
}());