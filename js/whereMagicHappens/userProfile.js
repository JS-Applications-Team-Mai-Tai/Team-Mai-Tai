/**
 * Created by bianka on 9/3/15.
 */

var UserProfile = (function() {
    function UserProfile(user){
        var _user,
            _name,
            _profilePic,
            _points,
            _gender;
        this._user = user || Parse.User.current();
    }

    UserProfile.prototype.init = function(){


    };

    Object.defineProperty(UserProfile.prototype, 'user', {
        get : function(){
            return this._user;
        },
        set : function(value){
            this._user = value;
        }
    });

    return UserProfile;

}());


System.exports = UserProfile;