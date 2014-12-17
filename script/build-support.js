'use strict';

/*
 * Dependencies.
 */

var fs,
    buzzwords;

fs = require('fs');
buzzwords = require('..');

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
