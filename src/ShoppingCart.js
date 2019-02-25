const mockDB = require('../test/mockObjects/MockDB');
var db = mockDB.db;
//This mock database is loaded with item names as keys and their price as values.
//These mock key/values pairs are specifically aimed to test this function.

function calculatePurchasePrice(customer, shoppingCart) {

    if (shoppingCart instanceof Array) {
        //discount variable incremented for accurate percent discount.
        var discount = 0.00;
        var beforeTax = 0.00;

        //Throw the error to keep a user from purchasing more than 50 items.
        if (shoppingCart.length > 50) {
            throw new Error("Too many items in your shopping cart.");
        }

        //Apply the 5% discount to the incrementer if the below requirements are met.
        else if (shoppingCart.length > 5 && shoppingCart.length < 10) {
            discount += 0.05;
        }

        //Apply the 10% discount to the incrementer if the below requirements are met.
        else if (shoppingCart.length > 9) {
            discount += 0.10;
        }

        //Checks to see if a customer is a club member and increments the discount calculation.
        if (customer.getClubMembership() === true) {
            discount += 0.10;
        }

        //This loop iterates over the list of database keys and gets they value of the key at that index.
        //The key's value is its price.
        for (var i = 0; i < shoppingCart.length; i++) {
            if (db.storage.has(shoppingCart[i])) {
                beforeTax += db.getItem(shoppingCart[i]);
            }
            else {
                console.log("key not found " + shoppingCart[i]);
            }
        }

        //The return sum has the discount applied.
        beforeTax = beforeTax - (beforeTax * discount);

        //This boolean determined if a user is tax excempt.
        //Based on a user's excemption status the result is either returned as is -
        //or it has tax applied and is returned then.
        if (customer.getTaxStatus() === false) {
            beforeTax += beforeTax * 0.045;
            return beforeTax.toFixed(2);
        }
        else {
            return beforeTax.toFixed(2);
        }
    }
    else {
        throw new Error("Cart arguement/parameter not of type array.");
    }
}
module.exports.calculatePurchasePrice = calculatePurchasePrice;