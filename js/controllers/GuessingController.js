import {Currency as Coin} from 'js/whereMagicHappens/currencies/currency.js';
import {Gem} from 'js/whereMagicHappens/currencies/jem.js';

function manageGuessing(gameId) {
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
                if(!games[gameIndex].points) {
                    games[gameIndex].points = 1;
                } else {
                    games[gameIndex].points += 1;
                }
                games[gameIndex].images.splice(imageIndex, 1);
                Parse.User.current().save('games', games);

                var coins = Parse.User.current().get('coins');
                for(var i = 0; i < 5; i += 1) {
                    coins.push(new Coin());
                }

                Parse.User.current().save('coins', coins);

                var gemsToAdd = coins % 50;
                var gems = Parse.User.current().get('gems');
                for(var i =0; i < gemsToAdd; i += 1) {
                    gems.push(new Gem());
                }
            } else {
                alert('Wrong guess');
            }
        });

        createArtSpace(gameId);
    }
}

export {manageGuessing}