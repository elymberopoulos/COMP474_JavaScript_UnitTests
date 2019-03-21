const assert = require('chai').assert;
const cart = require('../../src/ShoppingCart');
const mock = require('../mockObjects/MockObjects');
const customer = require('../mockObjects/Customer');

//These are the main tests for the shopping cart function
describe("===== HOMEWORK TESTS =====", function () {
    describe("Test error handling.", function () {

        //test that error is thrown if shopping cart arguement is not of type Array
        it("test that error is thrown if shopping cart arguement is not of type Array", function () {
            var testUser = new customer.Customer('tim', true);
            var testVal = new String("Deliberate wrong type");
            
            assert.throws(() => {
                cart.calculatePurchasePrice(testUser, testVal);
            }, 'Cart arguement/parameter not of type array.');
        })

        //Test that error gets thrown if cart value is over 50 items in length
        it("Test that error gets thrown if cart value is over 50 items in length.", function () {
            var testUser = new customer.Customer('tim', true);
            var testVal = new Array();
            var x = new mock.Socks;
            for (var i = 0; i < 51; i++) {
                testVal.push('socks');
            }

            assert.throws(() => {
                cart.calculatePurchasePrice(testUser, testVal);
            }, 'Too many items in your shopping cart.');
        })
    })

    describe("Test discount applications", function () {

        //Check 10% discount - A shopping cart of 10 one dollar items should return 9.00 without tax
        it("Check 10% discount - A shopping cart of 10 one dollar items should return 9.00 without tax", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 10; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 9.00);
        })

        //Check 5% discount - A shopping cart of 7 one dollar items should return 6.65 without tax
        it("Check 5% discount - A shopping cart of 7 one dollar items should return 6.65 without tax.", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 7; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 6.65);
        })

        //Check club membership discount - 10 one dollar items plus club membership should equal 8.00 without tax
        it("Check club membership discount - 10 one dollar items plus club membership should equal 8.00 without tax", function () {
            var testUser = new customer.Customer('tim', true, true);
            var testVal = new Array();
            for (var i = 0; i < 10; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 8.00);
        })

        //Check tax excemption - 10 one dollar items placed into cart 10% discount returns 9 then %4.5 added on should equal 9.40
        it("Check tax excemption - \n \t 10 one dollar items placed into cart 10% discount returns 9 then %4.5 added on should equal 9.40", function () {
            var testUser = new customer.Customer('tim', false, false);
            var testVal = new Array();
            for (var i = 0; i < 10; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 9.40);
        })

    })

    describe("Tests to assert that decimals are rounding to the nearest cent ($0.01)", function () {

        //Check rounding down add two values to cart array (0.022 + 0.023) should equal 0.04
        it("Check rounding down add two values to cart array (0.022 + 0.023) should equal 0.04", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            testVal.push("0.022");
            testVal.push("0.023");

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 0.04);
        })

        //Check rounding up add two values to cart array (0.023 + 0.023) should equal 0.05
        it("Check rounding up add two values to cart array (0.023 + 0.023) should equal 0.05", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 2; i++) {
                testVal.push("0.023");
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 0.05);

        })
    })

    //Test that if a key is not in the database then the total price is not incrememnted.
    describe("Test that if a key is not in the database then the total price is not incrememnted.", function(){
        it("Insert a non-existant key/item into the shopping cart and make sure the price is not incremented and the program does not crash", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 3; i++) {
                testVal.push('socks');
            }
            testVal.push('hat');

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 3);
        })
    })
})