'use strict';

var fs = require('fs');
var bail = require('bail');
var jsdom = require('jsdom');

jsdom.env('http://en.wikipedia.org/wiki/List_of_buzzwords', done);

function done(err, win) {
  var values;

  bail(err);

  values = [].slice.call(win.document.querySelectorAll('#mw-content-text > ul li, .columns > ul li'))
    .filter(function (node) {
      return !node.className.trim();
    })
    .filter(function (node) {
      if (!node.parentNode.previousElementSibling) {
        return true;
      }

      return !/see also|external links/i.test(
        node.parentNode.previousElementSibling.textContent
      );
    })
    .map(function (node) {
      var head = node.childNodes[0];
      return (head.tagName === 'A' ? head : node).textContent;
    })
    .map(function (value) {
      var match;

      /* Remove cites. */
      value = value.replace(/\[[^\]]+]\*?/g, '');

      /* Split comment from buzzword. */
      match = value.match(/^([\s\S+]+?)( [-–/] ?|\(|,)/);

      if (match) {
        value = match[1];
      }

      /* Remove abbreviation from buzzword. */
      value = value.replace(/^[A-Z]+[-–/] /, '');

      /* Remove multiple cases. */
      value = value.replace(/\/\w.+/, '');

      return value.toLowerCase().trim();
    })
    .filter(function (value) {
      var head = value.charAt(0);
      return head !== '-' && head !== '_' && value.charAt(value.length - 1) !== '?';
    })
    .filter(function (value) {
      return value !== 'uc' && value !== 'that' && !/_blank_/.test(value);
    })
    .filter(Boolean)
    .filter(function (value, index, all) {
      return all.indexOf(value, index + 1) === -1;
    })
    .sort();

  fs.writeFile('index.json', JSON.stringify(values, 0, 2) + '\n', bail);
}
