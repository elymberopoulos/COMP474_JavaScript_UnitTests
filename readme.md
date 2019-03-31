# This the homework submission for Eric Lymberopoulos
[![Build Status](https://travis-ci.com/elymberopoulos/COMP474_JavaScript_UnitTests.svg?branch=master)](https://travis-ci.com/elymberopoulos/COMP474_JavaScript_UnitTests)

## Install and setup
    -1. Ensure you have Node.js installed and the environmental variables are setup correctly.
    -2. In the root directory of the project type: "npm i" to install the dependencies for the project.
    -3. Run command 'npm run test' in the terminal and test output should be visible with coverage provided by NPM's nyc package.

### Developing Black Box Tests
    -This is a breakdown of the different internal functional requirements so new developers can write their own tests.
      1. Item getItem (String ItemID) - The mock database should have a getItem function that returns a price based
      on an item key.
      2. float getPrice() - Each item in the code will have a get price function which returns its price. This is the value
      of the key value pairs in the database.
      3. calculatePurchasePrice (List<String> ProductIDs, Customer customer) - This function calculates the shopping cart price
      based on a variety of factors. I.E. if a customer is tax-excempt or is a shopping club member. The list will be looped through
      looking for item names and getting those items out of the database incrememnting the return price value.
    

### Understanding Mocha Test Framework
    -In the test files there are 'describe' methods with a second parameter function.
    Additional describes can be placed in the second parameter function indefinitely. 
    These describes allow for test descriptions to be output in the terminal when the tests are run. 
    The assertions (actual tests) reside in the scope of the 'it' methods second parameter function.
    

### NPM Packages
    -"chai": "^4.2.0",
    -"mocha": "^5.2.0",
    -"nyc": "^13.3.0"
    

# Resubmission HW1 Part 2
    -I have changed the literal value in the shopping cart function so that it now uses >= 10 instead of a different value (9).
    -The shopping cart function now has a "preamble" that describes its parameters and its output.
    -The old tests are in the old_HW_Tests directory.
    -I have added numerous BVA tests in the assignmentTests directory in the ShoppingCartBVA.js file.

# Resubmission
### Homework Tests
    1. Test error handling
      -Test that error is thrown if shopping cart arguement is not of type Array (input of String)(output is an Error).
      -Test that error gets thrown if cart value is over 50 items in length (input of an Array of 51 items)(output is an Error).
    2. Test discount applications
      -Check 10% discount - A shopping cart of 10 one dollar items should return 9.00 without tax.
      -Check 5% discount - A shopping cart of 7 one dollar items should return 6.65 without tax.
      -Check club membership discount - 10 one dollar items plus club membership should equal 8.00 without tax.
      -Check tax application to net price - 10 one dollar items placed into cart 10% discount returns 9 then %4.5 added on should equal 9.40.
    3. Tests to assert that decimals are rounding to the nearest cent ($0.01).
      -Check rounding down - add two values to cart array (0.022 + 0.023) should equal 0.04.
      -Check rounding up - add two values to cart array (0.023 + 0.023) should equal 0.05.

### Additional Tests
    -(BVA) Empty array input should return 0 from the shopping cart calculate price function.
