import Handlebars from 'js/lib/handlebars.js';

var UserProfile = (function () {
    function UserProfile(username, coins, gems) {
        var _username,
            _profilePic,
            _coins,
            _gems;
        this._username = username;
        this.coins = coins;
        this.gems = gems;
    }

    UserProfile.prototype.visualize = function () {
        var template = $('#user-profile-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var profile = compiledTemplate({
            username: this._username,
            coins: this.coins,
            gems: this.gems
            //coins and gems to come
        });

        var page = $('#main-content');

        page.html('');
        page.append(profile);


    };

    Object.defineProperty(UserProfile.prototype, 'user', {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        }
    });


    Object.defineProperty(UserProfile.prototype, 'profilePic', {
        get: function () {
            return this._profilePic;
        },
        set: function (value) {
            this._profilePic = value;
        }
    });

    return UserProfile;

}());


export {UserProfile}