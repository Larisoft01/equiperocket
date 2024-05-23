const User = require( '../entities/user');
const {signIn} = require( '../usecases/user/signIn.js');
const {signUp} = require( '../usecases/user/signUp.js');
const {generateToken} = require("../utils/tokenUtils.js");
const {userProfile} = require("../usecases/user/userProfile.js");

let user = new User();

async function authUser(req, res){
    try {
        const { email, password } = req.body;
        user.email = email;
        user.password = password;
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
        const name = req.body.name;
        let user = new User(email, password,name);
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