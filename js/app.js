import Sammy from './lib/sammy.js';
import {createNewGame} from 'js/controllers/NewGameController.js';
import {visualizeProfile} from 'js/controllers/UserProfileController.js';

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

    localStorage.setItem('nextId', 0);

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


        /////////////////////////////////////////////////
        this.get('#/my-profile', function (context) {
            this.load('./templates/user-profile-template.html', function (data) {
                context.$element().html(data);
                visualizeProfile();
            });
        });

        /////////////////////////////////////////////////

        this.get("#/my-games", function (context) {
            this.load('./templates/userGames.html', function (data) {
                context.$element().html(data);

                System.import('./js/controllers/Games.js').then(function () {
                    showGames();
                });
            });
        });

        this.get("#/my-games/:id/:player/vs/:enemy", function (context) {
            var enemy = this.params['player'] === Parse.User.current().get('username') ? this.params['enemy'] : this.params['player'];
            var gameId = this.params['id'];
            this.load('./templates/game-details.html', function (data) {
                context.$element().html(data);
                System.import('./js/controllers/GameDetailsController.js')
                    .then(function () {
                        showGameDetails(enemy, gameId);
                        if (!Parse.User.current().get('games')[gameId].myTurn) {
                            var word = $('#btn-guess').attr('data-id');
                            $('#btn-guess').on('click', function () {
                                var input = $('#guess').val();
                                if (input === word) {
                                    alert('Wow you guessed it');
                                    var gameIndex = window.location.hash.split('/')[2];
                                    var imageIndex = $('#btn-guess').parent().parent().attr('data-id');
                                    var games = Parse.User.current().get('games');
                                    games[gameIndex].myTurn = true;
                                    games[gameIndex].images.splice(imageIndex, 1);
                                    Parse.User.current().save('games', games);
                                } else {
                                    alert('Wrong guess');
                                }
                            })
                        }
                    })
                    .then(function () {
                        System.import('./js/controllers/DrawingController.js').then(function () {
                            if (Parse.User.current().get('games')[gameId].myTurn) {
                                createArtSpace();
                            }
                        });

                    });
            })
        });

        this.get('#/new-game', function (context) {
            var that = this;
            this.load('./templates/new-game.html', function (data) {
                System.import('./js/controllers/NewGameController.js').then(function () {
                    createNewGame();
                });
            }).then(function () {
                that.redirect('#/my-games');
            });
        });

        this.notFound = function () {
            // do something
        }

        //this.get('#/art-space', function (context) {
        //    this.load('./templates/draw.html', function (data) {
        //        System.import('./js/controllers/DrawingController.js').then(function () {
        //            context.$element().html(data);
        //            createArtSpace();
        //        });
        //    });
        //});


    });

    $(function () {
        app.run("#/home");
    });
}());