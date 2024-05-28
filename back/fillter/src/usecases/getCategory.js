import getAllEatery from "../models/eateryModel.js";
import Eatery from "../entities/users/eatery.js";

export function getCategory(category){
    
    const cat = Object.values(category);
    const eateries = getAllEatery();
    const eateryArray = Object.values(eateries);
    const filteredEatery = eateryArray.filter(eatery => eatery.category.trim().toLowerCase() === cat[0].trim().toLowerCase());

    const json = JSON.stringify(filteredEatery);

    return json;
    
};

export default getCategory;