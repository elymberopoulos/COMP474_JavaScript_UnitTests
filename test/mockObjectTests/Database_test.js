const assert = require('chai').assert;
const db = require('../mockObjects/Database');
const mock = require('../mockObjects/MockObjects');

describe("Testing the database map.", function () {
    var database = new db.Database();
    var sock = new mock.Socks();
    var pants = new mock.Pants();

    it("Testing that database object is not null.", function () {
        assert.isNotNull(database.getStorage());
    });

    it("Testing that database is instance of / type of Map", function () {
        assert.isTrue(database.getStorage() instanceof Map);
    });

    it("Database should start with zero items.", function () {
        assert.equal(database.getStorage().size, 0);
    });

    it("Insert one item into database and assert it has one.", function () {
        database.getStorage().set("sock", sock.getPrice());
        assert.equal(database.getStorage().size, 1);
    });

    it("Insert one more item into database and assert it has two.", function () {
        database.getStorage().set("pants", pants.getPrice());
        assert.equal(database.getStorage().size, 2);
    });

    describe("Testing retrieving items from the database.", function(){
        it("Test retrieve socks and test the retrieved price.", function(){
            let test = database.getItem("sock");
            assert.equal(test, 1.00);
        });

        it("Test string of 'Entry not found.' returned for non-existant key.", function(){
            let test = database.getItem("shoe");
            assert.equal(test, "Entry not found.");
        });
    });
})