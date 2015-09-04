import {logOut} from '../controllers/LogOutController.js';
import {Word} from '../whereMagicHappens/word.js';

function prepareEnvironment() {
    Parse.initialize("XyNdXQeBrdwFfoy1BXvnxf5sSBfd2QdpXJUtbSh9", "lVXyZDKnKUyLfcYxW3cQghtg6dJB5Hz9Pymf00XG");
    if (Parse.User.current()) {
        $('#userName').html(Parse.User.current().get('username'));
        $('#log-in').hide();
        $('#log-out').show();
        $('#sign-up').hide();
        $('#user-options').show();
    } else {
        $('#user-options').hide();
    }

    $('#log-out')
        .on('click', function () {
            logOut();
        });

    localStorage.setItem('nextId', 0);
}

function setUpWordList() {
    var wordsAsStrings = [
        "apple",
        "car",
        "truck",
        "strawberry",
        "banana",
        "olive",
        "cherry",
        "chocolate",
        "ice-cream",
        "glass",
        "spoon",
        "bottle",
        "bed",
        "window",
        "house",
        "planet",
        "star",
        "baby",
        "grave",
        "fork",
        "tv",
        "mobile phone",
        "laptop",
        "light bulb",
        "spaghetti",
        "t-shirt",
        "sock",
        "shorts",
        "underwear",
        "bra",
        "shop",
        "race track",
        "zip"
    ];

    var WordList = Parse.Object.extend('WordList');
    new Parse.Query(WordList)
        .find()
        .then(function (wordLists) {
            if (wordLists.length > 0) {
                if (wordLists[0].get('data').length < wordsAsStrings.length) {
                    var wordList = wordLists[0];

                    var data = [];
                    for (var i = 0, len = wordsAsStrings.length; i < len; i += 1) {
                        data.push(new Word(wordsAsStrings[i], 'medium', 'general'));
                    }

                    wordList.set('data', data);
                    wordList.save();
                }
            } else {
                wordList = new WordList();

                data = [];
                for (i = 0, len = wordsAsStrings.length; i < len; i += 1) {
                    data.push(new Word(wordsAsStrings[i], 'medium', 'general'));
                }

                wordList.set('data', data);
                wordList.save();
            }
        });
}

function initialize() {
    prepareEnvironment();
    setUpWordList();
}

export {initialize}