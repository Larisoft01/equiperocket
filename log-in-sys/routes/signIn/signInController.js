const fs = require('fs');

const users = JSON.parse(fs.readFileSync("users.json"));
function signIn(email, password) {
    let success = false;
    console.log("signIn", email, password);
    const filteredUsers = getUserByEmail(email);
    if (filteredUsers || filteredUser.email == email ) {
      
        if(filteredUsers.password == password) {
            
            success = true; 
        }
    }
    return success;
}

function getUserByEmail(email) {

    const userArray = Object.values(users);
    const filteredUser = userArray.find(user => user.email === email);
    console.log(filteredUser);

    return filteredUser;
}

module.exports = {
    signIn
}