class Socks {
    
    constructor() {
        this.price = 1.13;
    }
    getPrice() {
        return this.price;
    }
}

class Pants {

    constructor() {
        this.price = 4.30;
    }
    getPrice() {
        return this.price;
    }
}

module.exports = {
    Socks: Socks,
    Pants: Pants
}