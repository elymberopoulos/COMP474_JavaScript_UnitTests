const assert = require('chai').assert;
const customer = require('../../src/Customer');

describe("Testing for Customer class.", function(){

    var mary = new customer.Customer('Mary', true, true);
    
    describe("Testing for mock object who is tax excempt.", function(){
        it("Test get name", function(){
            assert.equal(mary.getName(), "Mary");
        });

        it("Tax excemption should be true", function(){
            assert.isTrue(mary.getTaxStatus());
        });

        it("Test club membership status", function(){
            assert.isTrue(mary.getClubMembership());
        })

        it("Test changing club membership status", function(){
            mary.setClubMembership(false);
            assert.isFalse(mary.getClubMembership());
        })
    });

    describe("Testing setter functions for mock object.", function(){
        it("Test set name.", function(){
            mary.setName("Susan");
            assert.equal(mary.getName(), "Susan");
        });

        it("Tax excemption should be false", function(){
            mary.setTaxStatus(false);
            assert.isFalse(mary.getTaxStatus());
        });
    });
});