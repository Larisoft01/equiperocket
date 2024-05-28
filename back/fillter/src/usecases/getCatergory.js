import getAllEatery from "../models/eateryModel.js";


export function getCategory(category){

    const eateries = getAllEatery();
    const eateryArray = Object.values(eateries);
    const filteredEatery = eateryArray.filter(eatery => eatery.category === category.category);

    return filteredEatery;
};

export default getCategory;