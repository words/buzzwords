'use strict';

/*
 * Dependencies.
 */

var fs,
    textToJSON;

fs = require('fs');
textToJSON = require('plain-text-data-to-json');

/*
 * Dependencies.
 */

var data;

data = textToJSON(fs.readFileSync('data/buzzwords.txt', 'utf8'));

/*
 * Make sure no upper- or mixed-case values exist.
 */

data.forEach(function (word) {
    if (word.toLowerCase() !== word) {
        throw new Error(
            'Mixed-case entry `' + word + '`. ' +
            'Please ensure all entries are lower case.'
        );
    }
});

/*
 * Write.
 */

fs.writeFileSync('data/buzzwords.json', JSON.stringify(data, null, 2));
