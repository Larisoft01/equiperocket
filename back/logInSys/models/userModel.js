const fs = require('fs');
const path = require('path');
const User = require('../models/userModel');
const { getEmail } = require('../entities/user');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


async function addUser(User) { 
    const newUserId = Object.keys(users).length + 1;
    
    const user = {
        
        email: User.email,
        password: User.password

    };
    const newUserList = {...users};
    newUserList[newUserId.toString()] = user;
    fs.writeFileSync(usersFilePath, JSON.stringify(newUserList, null, 2));
}; 

function getUserByEmail(User) {
    const userArray = Object.values(users);
    const filteredUser = userArray.find(user =>  user.email === User.email );
    console.log("here");


    return filteredUser;
};



module.exports = {
   addUser,
   getUserByEmail
};

