class Customer {
    constructor(name, taxStatus, clubMembership) {
        this.name = name;
        this.taxStatus = taxStatus;
        this.clubMembership = clubMembership;
    }

    getClubMembership() {
        return this.clubMembership;
    }
    
    setClubMembership(val) {
        this.clubMembership = val;
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