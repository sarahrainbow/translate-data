# Documentation

This is a REST API created with Node JS and Express.

Using Node JS alongside the Express JavaScript Framework meant being able to write backend-code in JavaScript, which is fast, well supported, and gives access to many handy npm packages.

One such npm package used for this was nodemon, which was installed as a dev dependency to detect changes and restart the server during development.



## Future enhancements

* More sophisticated method of defining metadata.

This was the biggest struggle when developing the API due to the inconsistent nature of input data. Also only having one piece of sample data



* Support other languages. 

Currently only supports Persian translations. 

Possible implementation: API accepts a language parameter which the API could use to properly parse the translated fields of the output.



* Create further environments e.g. prod, staging
  * In order to make the code more robust and less likely to deploy breaking changes