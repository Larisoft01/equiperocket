class Eatery {
    constructor(name, address, category) {
        this.name = name;
        this.address = address;
        this.category = category;
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getCategory(){
        return this.category;
    }

}

export default Eatery;