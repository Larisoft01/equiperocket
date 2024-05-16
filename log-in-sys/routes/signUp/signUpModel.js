const{signUp} = require("./signUpControl");




function postUser(req, res){
    try {
        const email = req.body.email;
        const password = req.body.password;
        const status = signUp(email, password);
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

function getUser(req, res) {
    const email = req.body.email;eq.params.email;
}

module.exports = {
    postUser
}