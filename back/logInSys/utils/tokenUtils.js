const jwt = require('jsonwebtoken');
const User = require( '../entities/user');

const {... user} = User; 


function generateToken(User) {
    let token = jwt.sign({...user}, process.env.JWT_SECRET, {
        expiresIn: 86400    
    });
    return token;
};

function verifyToken(token) {
   try{ 
    return jwt.verify(token, process.env.SECRETs);
    }catch(err){
        return null
    } 
}

module.exports = { 
    generateToken, 
    verifyToken 
};