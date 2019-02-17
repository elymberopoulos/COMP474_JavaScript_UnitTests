class Customer {
    constructor(name, taxStatus) {
        this.name = name;
        this.taxStatus = taxStatus;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTaxStatus() {
        return this.taxStatus;
    }
    setTaxStatus(newStatus) {
        this.taxStatus = newStatus;
    }
}

module.exports.Customer = Customer;