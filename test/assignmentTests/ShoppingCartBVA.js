const assert = require('chai').assert;
const cart = require('../../src/ShoppingCart');
const mock = require('../../src/MockObjects');
const customer = require('../../src/Customer');

describe("===== HOMEWORK TESTS BVA =====", function () {
    describe("Additional Boundary Value Tests for shopping cart calculate price function", function () {

        it("Empty array input should return 0 from the shopping cart calculate price function", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 0.00);
        })
    })
})