const User = require("../../entities/user.js");
const {getUserByEmail} = require("../../models/userModel.js");

async function userProfile(User){

    const filteredUser = await getUserByEmail(User);
    console.log(filteredUser);
    return filteredUser;
}

module.exports = {
    userProfile
};