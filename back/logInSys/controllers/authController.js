const User = require( '../entities/user');
const {signIn} = require( '../usecases/user/signIn.js');
const {signUp} = require( '../usecases/user/signUp.js');
const {generateToken} = require("../utils/tokenUtils.js");
const {userProfile} = require("../usecases/user/userProfile.js");

async function authUser(req, res){
    try {
        const { email, password } = req.body;
        let user = new User(email, password);
        let success = await signIn(user);
        if (success === true){
            const token = generateToken(user);
            return res.status(200).json({ token, message: "Usuário logado!" });
        } else {
            return res.status(400).send("Usuário ou senha incorretos!");
        }
        
    } catch (error) {
        res.status(500);
        return res.send(error.message);
    
    }
}


async function postUser(req, res){
    try {
        const email = req.body.email;
        const password = req.body.password;
        let user = new User(email, password);
        console.log(user);
        const status = await signUp(user);
        if (status === true){
            res.status(201);
            return res.send("Usuário criado!");
        }else{
            res.status(400);
            return res.send("Usuário já existe!");
        }
    } catch (error) {
       res.status(500);
       return res.send(error.message);    
    }
}

async function getUser(req,res){
    try {
        const user = req.user;
        const filteredUser = await userProfile(user);
        return res.status(201).json(filteredUser);
    } catch (error) {
        res.status(500);
        return res.send(error.message);
    }
}

module.exports = {
    authUser,
    postUser,
    getUser
};