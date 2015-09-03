import {UserProfile} from 'js/whereMagicHappens/userProfile.js';

function visualizeProfile() {
    var currentUser = Parse.User.current();
    var currentUsername = currentUser.get('username');
    var currentUserCoins = currentUser.get('coins').length;
    var currentUserGems = currentUser.get('gems').length;
    var userProfile = new UserProfile(currentUsername, currentUserCoins, currentUserGems);
    userProfile.visualize();
}

export {visualizeProfile}
