//Pegar as entidadese e os usecases para req e res e passar para as rotas

import  getCatergory  from '../usecases/getCatergory.js';
import  getName  from '../usecases/getName.js';


function getEateryByName(req, res){
    try {
        const name = req.body;
        const filteredEatery = getName(name);
        return res.status(200).json(filteredEatery);
    } catch (error) {
        res.status(500);
        return res.send(error.message);
    }
};

function getEatariesByCategory(req, res){
    try {
        const category = req.body;
        const filteredEatery = getCatergory(category);
        return res.status(201).json(filteredEatery);
    } catch (error) {
        res.status(500);
        return res.send(error.message);
    }
};


export {  
    getEatariesByCategory,
    getEateryByName
}
