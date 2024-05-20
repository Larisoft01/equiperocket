const { verifyToken } = require("../utils/tokenUtils");


async function authMiddlewere(req,res,next){
    const token = await req.headers.authorization?.split(' ')[1];;
  
    if(token == null){
         return res.status(401);
    }else{ 
        const decode = verifyToken(token);
        if(decode == null){
           return res.status(401);
        }else{
            req.user = decode;  
            next();
           
        }
      
    }
   
};

module.exports  = {
    authMiddlewere
};