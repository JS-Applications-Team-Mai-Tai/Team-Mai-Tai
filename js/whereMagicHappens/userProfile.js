/**
 * Created by bianka on 9/3/15.
 */

var UserProfile = (function() {
    function UserProfile(user){
        var _username,
            _profilePic,
            _coins,
            _jems;
        this._username = username;

    }

    UserProfile.prototype.visualize = function(){
        var template = $('#user-profile-template').html();
        var compiledTemplate = Handlebars.compile(template);
        var profile = compiledTemplate({
            username: this.username,
            coins: this.coins,
            jems: this.jems
        });
        var page = $('#main-content');

        page.html('');
        page.append(profile);


    };

    Object.defineProperty(UserProfile.prototype, 'user', {
        get : function(){
            return this._user;
        },
        set : function(value){
            this._user = value;
        }
    });


    Object.defineProperty(UserProfile.prototype, 'profilePic', {
        get : function(){
            return this._profilePic;
        },
        set : function(value){
            this._profilePic = value;
        }
    });

    return UserProfile;

}());


System.exports = UserProfile;