const mock = require('../src/MockObjects');
const assert = require('chai').assert;

describe("Tests on mock sock object.", function () {

    const mockSock = new mock.Socks();
    
    it("Test for mock object price.", function () {
        assert.equal(mockSock.getPrice(), 1.13);
    });

    it("Test mock object is not null.", function () {
        assert.isTrue(mockSock !== null);
    });

    it("Test for mock object price typeOf 'Number'.", function () {
        assert.typeOf(mockSock.getPrice(), 'Number');
    })
})

describe("Tests on mock pants object.", function () {

    const mockPants = new mock.Pants();

    it("Test for mock object price.", function () {     
        assert.equal(mockPants.getPrice(), 4.30);
    });

    it("Test mock object is not null.", function () {
        assert.isTrue(mockPants !== null);
    });

    it("Test for mock object price typeOf 'Number'.", function () {
        assert.typeOf(mockPants.getPrice(), 'Number');
    })
})