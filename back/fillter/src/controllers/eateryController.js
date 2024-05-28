//Pegar as entidadese e os usecases para req e res e passar para as rotas

import  getCatergory  from '../usecases/getCatergory.js';
import  getName  from '../usecases/getName.js';


function getEatery(req, res){
    try {
        const eatery = req.body;
        console.log(eatery);
        let filteredEatery = null;
        if(eatery.name){
             filteredEatery = getName(eatery.name);
        }else if(eatery.category){
             filteredEatery = getCatergory(eatery.category);
        }
        
        return res.status(200).json(filteredEatery);
    } catch (error) {
        res.status(500);
        return res.send(error.message);
    }
};



export default getEatery;
