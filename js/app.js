import $ from './lib/jquery.js';
import Sammy from './lib/sammy.js';
import 'css/bootstrap-3.3.5-dist/js/bootstrap.js';
import './lib/sketch.js';

import {initialize} from './controllers/HomeController.js';
import {logIn} from './controllers/LogInController.js';
import {signUp} from './controllers/SignUpController.js';
import {createNewGame} from './controllers/NewGameController.js';
import {visualizeProfile} from './controllers/UserProfileController.js';
import {showGames} from './controllers/GamesController.js';
import {showGameDetails} from './controllers/GameDetailsController.js';
import {manageGuessing} from './controllers/GuessingController.js';
import {createArtSpace, download} from './controllers/DrawingController.js';
import {WordGenerator} from './whereMagicHappens/word-generator.js';

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
                context.$element().html(data);
                $('#log-me-in').on('click', function () {
                    logIn('#login-username', '#login-password');
                })
            });
        });

        this.get("#/sign-up", function (context) {
            this.load('./templates/sign-up.html', function (data) {
                context.$element().html(data);
                $('#sign-me-up').on('click', function () {
                    signUp('#signup-username', '#signup-password');
                })
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
                showGameDetails(gameId);
                $('#send-drawing').on('click', function () {
                    download();
                });

                createArtSpace(gameId);
                manageGuessing(gameId);
            })
        });

        this.get('#/new-game', function () {
            createNewGame();
            this.redirect('#/home');
        });

        this.notFound = function () {
            $.get('./templates/404-template.html', function (data) {
                $('#main-content').html($('<div/>').html(data).css({
                    'color': 'red',
                    'font-size': '40px',
                    'text-align': 'center'
                }));
            })
        }
    });

    $(function () {
        app.run("#/home");
    });
}());