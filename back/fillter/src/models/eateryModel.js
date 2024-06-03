//os use case chamam para interagir com o banco de dados
//alterar quando mexer com banco de dados, por enquanto é só um array 
//vlw copilot por ler minha mente 8)

import fs from 'fs'; 
import path from 'path';
import { fileURLToPath } from 'url';
//const Eatery = require('./entities/eatery.js');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function getAllEatery(){
    const eateryFilePath = path.join(__dirname, "../data/eateries.json");
    let eateries = JSON.parse(fs.readFileSync(eateryFilePath, "utf-8"));

    return eateries; 
}


export default getAllEatery;
