/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module buzzwords:script:build-data
 * @fileoverview Generate a database from source.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var data = require('../data');

/*
 * Write.
 */

fs.writeFileSync(path.join('support.md'), [].concat(
    ['# Support', ''],
    data.map(function (value) {
        return '*   “' + value + '”';
    }).join(';\n') + '.',
    ''
).join('\n'));
