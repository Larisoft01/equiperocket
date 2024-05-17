const {signIn} = require("./signInController");

function getUser(req, res){
    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const success = signIn(email, password);
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


module.exports = {
    getUser
}