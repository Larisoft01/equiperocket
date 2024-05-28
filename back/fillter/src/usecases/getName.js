import getAllEatery from "../models/eateryModel.js";



export function getName(name){
    const eateries = getAllEatery();
    const eateryArray = Object.values(eateries);
    const filteredEatery = eateryArray.find(eatery => eatery.name === name);

    return filteredEatery; 
};

export default getName;