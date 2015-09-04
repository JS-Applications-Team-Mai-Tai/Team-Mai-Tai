import $ from 'js/lib/jquery.js';
import Sammy from 'js/lib/sammy.js';
import 'css/bootstrap-3.3.5-dist/js/bootstrap.js';
import 'js/lib/sketch.js';
import {initialize} from 'js/controllers/HomeController.js';
import {createNewGame} from 'js/controllers/NewGameController.js';
import {visualizeProfile} from 'js/controllers/UserProfileController.js';
import {showGames} from 'js/controllers/GamesController.js';
import {showGameDetails} from 'js/controllers/GameDetailsController.js';
import {manageGuessing} from 'js/controllers/GuessingController.js';
import {createArtSpace} from 'js/controllers/DrawingController.js';

(function () {
    initialize();
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

        this.get('#/my-profile', function (context) {
            this.load('./templates/user-profile-template.html', function (data) {
                context.$element().html(data);
                visualizeProfile();
            });
        });

        this.get("#/my-games", function (context) {
            this.load('./templates/userGames.html', function (data) {
                context.$element().html(data);
                showGames();
            });
        });

        this.get("#/my-games/:id/:player/vs/:enemy", function (context) {
            var enemy = this.params['player'] === Parse.User.current().get('username') ? this.params['enemy'] : this.params['player'],
                gameId = this.params['id'];
            this.load('./templates/game-details.html', function (data) {
                context.$element().html(data);
                showGameDetails(enemy, gameId);
                createArtSpace(gameId);
                manageGuessing(gameId);
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
            this.load('.templates/404-template.html');
        }
    });

    $(function () {
        app.run("#/home");
    });
}());