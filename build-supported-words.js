'use strict';

var fs = require('fs'),
    words = require('./data/buzzwords.json');

fs.writeFileSync('Supported-buzzwords.md',
    'Supported Buzzwords\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
