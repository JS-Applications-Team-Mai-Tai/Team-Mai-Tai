import $ from './lib/jquery.js';
import sammy from './lib/sammy.js';

(function () {
    var app = sammy("#main-content", function () {
        this.get("#/", function () {
            $('body').append($('<div/>').html('Pesho'));
        });
    });

    app.run("#/");
}());