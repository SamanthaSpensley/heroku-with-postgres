var environment = 'development'; //targets information from the knexfile.js
var config = require('../knexfile')[environment];
module.exports = require('knex')(config);
