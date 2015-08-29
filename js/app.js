import $ from './lib/jquery.js';
import sammy from './lib/sammy.js';

(function () {
    var wrapper = $('#main-content');
    var app = sammy("#main-content", function () {
        this.get('#/home', function () {
            this.load('./templates/home.html', function (data) {
                wrapper.html(data);
            });
        });

        this.get("#/log-in", function () {
            this.load('./templates/log-in.html', function (data) {
                wrapper.html(data);
            });
        });

        this.get("#/sign-up", function () {
            this.load('./templates/sign-up.html', function (data) {
                wrapper.html(data);
            });
        });

        this.get("#/about", function () {
            this.load('./templates/about.html', function (data) {
                wrapper.html(data);
            });
        });
    });

    app.run("#/home");
}());