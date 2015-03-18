'use strict';

/*
 * Dependencies.
 */

var Interface = require('datalist-interface');

/*
 * Data.
 */

var words = require('./data/buzzwords.json');

/*
 * Expose buzzwords.
 */

module.exports = new Interface(words);
