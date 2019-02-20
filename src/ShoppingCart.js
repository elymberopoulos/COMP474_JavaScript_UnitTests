//The String will be the user's name.
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

        if (customer.getClubMembership() === true) {
            discount += 0.10;
        }

        for (var i = 0; i < shoppingCart.length; i++) {
            beforeTax += shoppingCart[i];
        }

        beforeTax = beforeTax - (beforeTax * discount);

        //This boolean determined if a user is tax excempt.
        if (customer.getTaxStatus() === false) {
            beforeTax += beforeTax * 0.045;
            return beforeTax.toFixed(2);
        }
        else {
            return beforeTax.toFixed(2);
        }
    }
    else{
        throw Error("Cart arguement/parameter not of type array.");
    }
}
module.exports.calculatePurchasePrice = calculatePurchasePrice;