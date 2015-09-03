import {UserProfile} from 'js/whereMagicHappens/userProfile.js';

function visualizeProfile(){
    var currentUser = Parse.User.current();
    var currentUsername = Parse.User.current().get('username');
    var userProfile = new UserProfile(currentUsername);
    userProfile.visualize();
}

export {visualizeProfile}
