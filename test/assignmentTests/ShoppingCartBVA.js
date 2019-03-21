const assert = require('chai').assert;
const cart = require('../../src/ShoppingCart');
const mock = require('../mockObjects/MockObjects');
const customer = require('../mockObjects/Customer');

describe("===== HOMEWORK TESTS BVA =====", function () {
    describe("Additional Boundary Value Tests for shopping cart calculate price function", function () {
        
        //Empty array input should return 0 from the shopping cart calculate price function
        it("Empty array input should return 0 from the shopping cart calculate price function", function () {
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 0.00);
        });
    });

    describe("Test that a cart with 4 items does not get any discount and a cart with 5 items gets the 5% discount applied", function(){
        
        //A cart with 5 one dollar items should not have a discount applied and return a price of 5.00.
        it("BVA TEST - A cart with 5 one dollar items should not have a discount applied and return a price of 5.00", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 5; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 5.00);
        });

        //A cart with 6 one dollar items should return a price of 5.70 after the 5% discount is applied.
        it("BVA TEST - A cart with 6 one dollar items should return a price of 5.70 after the 5% discount is applied", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 6; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 5.70);
        });
    });

    describe("Test that a cart of 9 and 10 items have the correct percentage applied", function(){

        //BVA TEST - a cart of 9 one dollar items should have only the 5% discount applied and return 8.55.
        it("BVA TEST - a cart of 9 one dollar items should have only the 5% discount applied and return 8.55.", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 9; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 8.55);
        });
        //BVA TEST - a cart of 10 one dollar items should have the 10% discount applied and it should return 9.00.
        it("BVA TEST - a cart of 10 one dollar items should have the 10% discount applied and it should return 9.00", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 10; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 9.00);
        });
    });
    
    describe("Tests for the cart size of 50 and 51 items are correctly handled", function(){

        //Test that error gets thrown if cart value is 51 items in length.
        it("BVA TEST - Test that error gets thrown if cart value is 51 items in length.", function () {
            var testUser = new customer.Customer('tim', true);
            var testVal = new Array();
            var x = new mock.Socks;
            for (var i = 0; i < 51; i++) {
                testVal.push('socks');
            }

            assert.throws(() => {
                cart.calculatePurchasePrice(testUser, testVal);
            }, 'Too many items in your shopping cart.');
        });

        //A cart of 50 one dollar items should have the 10% discount applied and it should return 45.00.
        it("BVA TEST - a cart of 50 one dollar items should have the 10% discount applied and it should return 45.00", function(){
            var testUser = new customer.Customer('tim', true, false);
            var testVal = new Array();
            for (var i = 0; i < 50; i++) {
                testVal.push('socks');
            }

            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 45.00);
        });
    });
});