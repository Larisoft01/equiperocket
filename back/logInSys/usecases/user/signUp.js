const { addUser ,getUserByEmail } = require( "../../models/userModel");
const User = require( "../../entities/user");

async function signUp(User) {   
    let filteredUser = await getUserByEmail(User); 
        let success = false;
    if(!filteredUser || filteredUser.email !== User.email) {
        addUser(User);
        success = true;
    }
    return success;
};




module.exports = {
    signUp
};