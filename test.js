'use strict';

var test = require('tape');
var buzzwords = require('.');

test('buzzwords', function (t) {
  t.equal(Array.isArray(buzzwords), true, 'should be an array');
  t.notEqual(buzzwords.indexOf('millennial'), -1, 'should contain words');

  t.end();
});
