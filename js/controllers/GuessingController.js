import {Currency as Coin} from '../whereMagicHappens/currencies/currency.js';
import {Gem} from '../whereMagicHappens/currencies/jem.js';
import {WordGenerator} from '../whereMagicHappens/word-generator.js';

function manageGuessing(gameId) {
    var wordGen = new WordGenerator();
    var gameIndex = -1;
    var currentUser = Parse.User.current();
    var currentUserGames = currentUser.get('games');
    var currentGame;
    for(var i = 0, len = currentUserGames.length; i < len; i += 1) {
        var currentGameToCheck = currentUserGames[i];
        if(currentGameToCheck.id === gameId) {
            currentGame = currentGameToCheck;
            gameIndex = i;
            break;
        }
    }

    if (!currentGame.myTurn) {
        var word = $('#btn-guess').attr('data-id');
        $('#btn-guess').on('click', function () {
            var input = $('#guess').val();
            if (input === word) {
                //alert('Wow you guessed it');
                swal({
                    title: 'Sweet!',
                    text: 'You guessed correctly, my friend!',
                    imageUrl: 'https://cdn3.iconfinder.com/data/icons/jolly-icons-free/64/picture_64.png',
                    timer: 2000,   showConfirmButton: false
                });

                var imageIndex = $('#btn-guess').parent().parent().attr('data-id');
                currentUserGames[gameIndex].myTurn = true;
                if (!currentGame.points) {
                    currentUserGames[gameIndex].points = 1;
                } else {
                    currentUserGames[gameIndex].points += 1;
                }

                currentUserGames[gameIndex].images.splice(imageIndex, 1);
                currentUserGames[gameIndex].word = wordGen.next();
                currentUser.save('games', currentUserGames);

                var enemyName = window.location.hash.split('/')[5];
                new Parse.Query(Parse.User).find().then(function (users) {
                    var enemy = users.filter(function (user) {
                        return user.get('username') === enemyName
                    })[0];

                    var enemyGames = enemy.get('games');
                    for(var i = 0; i < enemyGames.length; i += 1) {
                        if(enemyGames[i].id === currentGame.id) {
                            enemyGames[i].word = currentGame.word;
                        }
                    }

                    localStorage.setItem(enemy.get('username'), JSON.stringify(enemyGames));
                });

                var coins = currentUser.get('coins');
                for (var i = 0; i < 5; i += 1) {
                    coins.push(new Coin());
                }

                currentUser.save('coins', coins);

                var gemsToAdd = coins % 50;
                var gems = currentUser.get('gems');
                for (var i = 0; i < gemsToAdd; i += 1) {
                    gems.push(new Gem());
                }

                currentUser.save('gems', gems);
            } else {
                //alert('Wrong guess');
                swal({
                    title: "Ooops!",
                    text: "I'm sorry, you didn't guess that correctly :(",
                    type: "error",
                    timer: "1500",
                    showConfirmButton: false
                });
            }
        });
    }
}

export {manageGuessing}