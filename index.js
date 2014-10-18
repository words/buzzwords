'use strict';

/**
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/**
 * Data.
 */

var words;

words = require('./data/buzzwords.json');

/**
 * Expose buzzwords.
 */

module.exports = new Interface(words);
