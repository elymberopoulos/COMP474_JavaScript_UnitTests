###Issues Encountered
    - Initial struggle to get used to the way that Node operates with requiring/exporting modules.
    - Initial arithmatic was producing incorrect results.
    - Had trouble asserting that errors were being thrown with Mocha and Chai. Initial trouble was becuase of creating the mock objects inside the assertion scope. Once the mock objects were created outside the scope it worked fine.