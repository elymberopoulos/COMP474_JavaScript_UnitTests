const mock = require('./MockObjects');

class Database {
    constructor() {
        this.storage = new Map();
    }

    getStorage() {
        return this.storage;
    }
    
    getItem(item) {
        if (this.getStorage().has(item)) {
            return this.getStorage().get(item);
        }
        else {
            return "Entry not found.";
        }
    }
}
module.exports.Database = Database;