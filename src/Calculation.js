class Calculator {

    //dict is an object that hold key/value pairs that represent user names
    //and their tax excemption status.
    constructor(dict) {
        this.dict = dict;
    }

    //Spread operator "..." is an array parameter.
    //The String will be the user's name.
    HomeWorkFunction(...shoppingCart, String) {

        //discount variable incremented for accurate percent discount.
        var discount = 0.0;

        //Throw the error to keep a user from purchasing more than 50 items.
        if (shoppingCart.length > 50) {
            throw "Too many items in your shopping cart.";
        }

        //Apply the 5% discount to the incrementer if the below requirements are met.
        else if (shoppingCart.length > 5 && shoppingCart.length < 10) {
            discount += 0.05;
        }
        
        //Apply the 5% discount to the incrementer if the below requirements are met.
        else if (shoppingCart.length > 10) {
            discount += 0.10;
        }

    }

}
module.exports = {
    Calculator: Calculator
}