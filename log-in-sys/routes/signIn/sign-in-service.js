const fs = require('fs');


function getAlltUsers(){
    return JSON.parse(fs.readFileSync('users.json'));
}

function getUserById(id){
    const user = JSON.parse(fs.readFileSync('users.json'));

    const filteredUsers = user.filter(user => user.id === id)[0];

    return filteredUsers;
}