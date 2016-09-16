# Apple Dev Apprentice
> A little helper for all things for repetitive tasks in Apple web applications that have no API

## Installation
- Clone this repo locally
- `npm install`
- `npm start`

## Passing parameters

`npm start myemail@example.com` will create a new test user with that email address

## Configuration
By default, `config.sample.js` will be set on `browser.params`,
but if a `config.js` exists, that will be used instead

## Reporting
Results of the last run will be put in `results.json`. 
- Each test will be listed as an object
- Failed tests will have failed assertions listed in the `assertions` array with mroe information
