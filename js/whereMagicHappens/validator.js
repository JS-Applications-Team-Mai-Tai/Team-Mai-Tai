var validator = (function(){

    var validateUserNameAndPassword = function(username,password){

        if (username.length < 3 || password.length < 4) {
            console.error('Username and password are invalid');
        }
    };

    var validateIfUserExistsToLogOut = function(currentUser){
        if (currentUser) {
            Parse.User.logOut();
        }
    };

    var validatePriceOfJem = function(price){
        if(price < 10){
            console.log('Insufficient jems');
        }
    };

    return {
        validateUserNameAndPassword : validateUserNameAndPassword,
        validateIfUserExistsToLogOut: validateIfUserExistsToLogOut,
        validateJemInitPrice: validatePriceOfJem
    }

}());