# Documentation

## Overview
This is a REST API created with Node JS and Express.

Using Node JS alongside the Express JavaScript Framework meant being able to write backend-code in JavaScript, which is fast, well supported, and gives access to many handy npm packages.

npm packages used:
* nodemon – installed as a dev dependency to detect changes and restart the server during development.
* jest - the JavaScript Testing Framework used for tests
* babel – to transform the test module to CommonJS

## Testing
TDD techniques were employed to ensure that the functions within the dataParser were working correctly.
## Deployment

Preposed deployment method (not implemented):

- Deploy the code to an AWS lambda function
- Use API Gateway to make that lambda function accessible

Similar to this [approach](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html) but minus the DynamoDB element as there is no database required for this API.

## Future enhancements

* More sophisticated method of defining metadata

    * This was the biggest struggle when developing the API due to the inconsistent nature of input data.

    * It seems very likely that other input data would have different conditions for metadata

    * A potential fix for this could look something like this:

     ```
  const genericConditions = ['OOV', 'PTC', 'GFX', ':'];
  const uniqueConditions = ['Dave', 'Nick'];
  ```
  * when exposed to more input data, a list of generic metadata flags could be generated e.g. notes for voice-over artists

  * API accepts a `metadata-key-words` parameter which populates the genericConditions variable, so the user can specify unique metadata flags for that script e.g. presenter's names

* Support for other languages

  * Currently only supports Persian translations.

  * Possible future feature: API accepts a language parameter which the API could use to properly parse the translated fields of the output.


* More robust error handling

* Create further environments e.g. prod, staging
  * In order to make the code more robust and less likely to deploy breaking changes