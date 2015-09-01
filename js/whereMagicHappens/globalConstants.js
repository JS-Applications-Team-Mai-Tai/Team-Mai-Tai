/**
 * Created by Hristo on 9/1/2015.
 */
var constants = (function(){

    var usernameValidations = {
        minLengthName: 3,
        maxLengthName: 6
    };

    var initialStateOfGuess = {
        initial: 0
    };

    return {
        usernameValidations: usernameValidations,
        initialStateOfGuess: initialStateOfGuess
    }

}());