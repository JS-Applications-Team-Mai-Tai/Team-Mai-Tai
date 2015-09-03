import {UserProfile} from 'js/whereMagicHappens/userProfile.js';

function visualizeProfile(){
    var currentUser = Parse.User.current();
    var userProfile = new UserProfile(currentUser);
    userProfile.visualize();
}

export {visualizeProfile}
