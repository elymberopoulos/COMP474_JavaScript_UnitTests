#This the homework submission for Eric Lymberopoulos

##Install and setup
    -1. Ensure you have Node.js installed and the environmental variables are setup correctly.
    -2. In the root directory of the project type: "npm i" to install the dependencies for the project.
    -3. Run command 'npm run test' in the terminal and test output should be visible with coverage provided by NPM's nyc package
    ---

###Understanding Mocha Test Framework
    -In the test files there are 'describe' methods with a second parameter function. Additional describes can be placed in the second parameter function indefinitely. These describes allow for test descriptions to be output in the terminal when the tests are run. The assertions (actual tests) reside in the scope of the 'it' methods second parameter function.
    ---

###NPM Packages
    -"chai": "^4.2.0",
    -"mocha": "^5.2.0",
    -"nyc": "^13.3.0"
    ---


##Resubmission
    ###Homework Tests
    1. Test error handling.
      -test that error is thrown if shopping cart arguement is not of type Array (input of String)(output is an Error).
      -Test that error gets thrown if cart value is over 50 items in length (input of an Array of 51 items)(output is an Error).
    2. Test discount applications
      -Check 10% discount - A shopping cart of 10 one dollar items should return 9.00 without tax
      -Check 5% discount - A shopping cart of 7 one dollar items should return 6.65 without tax.
      -Check club membership discount - 10 one dollar items plus club membership should equal 8.00 without tax
      -Check tax application to net price - 10 one dollar items placed into cart 10% discount returns 9 then %4.5 added on should equal 9.40
    3. Tests to assert that decimals are rounding to the nearest cent ($0.01)
      -Check rounding down - add two values to cart array (0.022 + 0.023) should equal 0.04
      -Check rounding up - add two values to cart array (0.023 + 0.023) should equal 0.05

    ###Additional Tests
        -Empty array input should return 0 from the shopping cart calculate price function
