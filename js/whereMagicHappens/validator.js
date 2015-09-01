/**
 * Created by Hristo on 9/1/2015.
 */
var validator = (function(){

    var validateUserNameAndPassword = function(username,password){

        if (username.length < constants.usernameValidations.minLengthName || password.length < constants.usernameValidations.maxLengthName) {
            console.error('Username and password are invalid');
        }
    };

    var validateIfUserExistsToLogOut = function(currentUser){
        if (currentUser) {
            Parse.User.logOut();
        }
    };


    return {
        validateUserNameAndPassword : validateUserNameAndPassword,
        validateIfUserExistsToLogOut: validateIfUserExistsToLogOut
    }

}());