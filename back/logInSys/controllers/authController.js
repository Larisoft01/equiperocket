const User = require( '../entities/user');
const {signIn} = require( '../usecases/user/signIn.js');
const {signUp} = require( '../usecases/user/signUp.js');


async function getUser(req, res){
    try {
        const { email, password } = req.body;
        let user = new User(email, password);
        let success = await signIn(user);
        if (success === true){
            res.status(200);
            res.send("Usuário logado!");
        } else {
            res.status(400);
            res.send("Usuário ou senha incorretos!");
        }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
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
            res.send("Usuário criado!");
        }else{
            res.status(400);
            res.send("Usuário já existe!");
        }
    } catch (error) {
       res.status(500);
       res.send(error.message);    
    }
}



module.exports = {
    getUser,
    postUser
};