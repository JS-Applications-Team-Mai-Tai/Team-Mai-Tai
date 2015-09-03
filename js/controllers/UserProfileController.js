/**
 * Created by bianka on 9/3/15.
 */

import userProfile from '.js/whereMagicHappens/userPorfile.js';

function visualizeProfile(){
    var currentUser = Parse.User.current();
    var userProfile = new UserProfile(currentUser);
    userProfile.visualize();
}

