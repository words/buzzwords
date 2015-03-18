'use strict';

/*
 * Dependencies.
 */

var fs = require('fs');
var buzzwords = require('..');

/*
 * Write.
 */

fs.writeFileSync('Support.md',
    'Supported Buzzwords\n' +
    '=================\n' +
    '\n' +

    buzzwords.all().map(function (buzzword) {
        return '* “' + buzzword + '”';
    }).join(';\n') +

    '.\n'
);
