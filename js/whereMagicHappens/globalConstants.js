/**
 * Created by Hristo on 9/1/2015.
 */
var constants = (function () {

    var usernameValidations = {
        minLengthName: 3,
        maxLengthName: 6
    };

    var initialStateOfGuess = {
        initial: 0
    };

    var users = {
        initialValue: 0,
        usersAddition: 1
    };

    var helperValues = {
        randomIndexStep: 1,
        presenceOfValueIndex: 0
    };

    var gameValues = {
        initialCoins: 0
    };

    var xValues = {
        a: 5,
        b: 8
    };

    var colors = {
        initial: "#000"
    };

    var prices = {
        jemPrice: 10,
        coinPrice: 1
    };

    return {
        usernameValidations: usernameValidations,
        initialStateOfGuess: initialStateOfGuess,
        users: users,
        helperValues: helperValues,
        gameValues: gameValues,
        xValues: xValues,
        colors: colors,
        prices: prices
    }

}());