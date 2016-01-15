/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module retext:buzzwords
 * @fileoverview Test suite for `buzzwords`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var buzzwords = require('./');

/*
 * Tests.
 */

test('buzzwords', function (t) {
    t.equal(typeof buzzwords, 'object', 'should be an array #1');
    t.equal(Array.isArray(buzzwords), true, 'should be an array #2');
    t.notEqual(buzzwords.indexOf('upcycling'), -1, 'should contain words');
    t.end();
});
