const assert = require('chai').assert;
const cart = require('../src/ShoppingCart');
const mock = require('../src/MockObjects');
const customer = require('../src/Customer');



describe("===== HOMEWORK TESTS =====", function () {
    describe("Test error handling.", function () {
        it("Test that error gets thrown if cart value is over 50 items in length.", function () {
            var testUser = new customer.Customer('tim', true);
            var testVal = new Array();
            var x = new mock.Socks;
            for (var i = 0; i < 51; i++) {
                testVal.push(x.getPrice());
            }
            assert.throws(() => {
                cart.calculatePurchasePrice(testUser, testVal);
            }, 'Too many items in your shopping cart.');
        })
    })

    describe("Test discount applications", function(){
        var testUser = new customer.Customer('tim', true);
        var testVal = new Array();
        for(var i = 0; i<10; i++){
            testVal.push(1.00);
        }
        it("Check 10% discount - A shopping cart of 10 one dollar items should return 9.00", function(){
            let result = cart.calculatePurchasePrice(testUser, testVal);
            assert.equal(result, 9.00);
        })
    })
})