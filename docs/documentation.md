# Documentation

## Overview
This is a REST API created with Node JS and Express.

Using Node JS alongside the Express JavaScript Framework meant being able to write backend-code in JavaScript, which is fast, well supported, and gives access to many handy npm packages.

npm packages used: 
* nodemon – installed as a dev dependency to detect changes and restart the server during development.
* jest - JavaScript Testing Framework
* babel – to transform my test module to CommonJS 

## Testing
Employed TDD techniques to ensure that my dataParser and language detection functions were working correctly.
## Deployment 

Preposed deployment method (not implemented):

- Deploy the code to an AWS lambda function
- Use API Gateway to make that lambda function accessible

Similar to this [approach](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html) but minus the DynamoDB element as there is no database required for this API.

## Future enhancements

* More sophisticated method of defining metadata

    * This was the biggest struggle when developing the API due to the inconsistent nature of input data. 

  * Possible future feature: API accepts a metadata key words parameter which could make this more versatile for other scripts e.g. presenter's names, notes for voice-over artists e.g. OOT, PTC


* Support other languages

  * Currently only supports Persian translations. 

  * Possible future feature: API accepts a language parameter which the API could use to properly parse the translated fields of the output.


* More robust error handling

* Create further environments e.g. prod, staging
  * In order to make the code more robust and less likely to deploy breaking changes