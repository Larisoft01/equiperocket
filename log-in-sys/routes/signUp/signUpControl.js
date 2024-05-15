
const users = {
    "1": { 
        email: "email", 
        password: "password"
    }

};

function signUp(email, password) {   
    console.log("signUp", email, password);
    const filteredUser = getUserByEmail(email);
    if(!filteredUser || filteredUser.email !== email) {
        const newUser = {
            email: email,
            password: password
        }
        const newUserList = {...users};
        const newUserId = Object.keys(users).length + 1;
        newUserList[newUserId.toString()] = newUser;
        console.log(newUserList);
        return true;
    }else{
        return false;
    }
}

function getUserByEmail(email) {
    const userArray = Object.values(users);
    const filteredUser = userArray.find(user => user.email === email);
    return filteredUser;
}




module.exports = {
    signUp
}

