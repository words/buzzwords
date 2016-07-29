/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module buzzwords:script
 * @fileoverview Generate a dictionary of entity names to replacements.
 */

'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var Scraper = require('scraperjs');

/* Read. */
Scraper.DynamicScraper
  .create('http://en.wikipedia.org/wiki/List_of_buzzwords')
  .scrape(scrape, function (results) {
    var list = JSON.stringify(parse(results), 0, 2) + '\n';
    fs.writeFileSync(path.join(__dirname, '..', 'index.json'), list);
  });

/**
 * Scrape.
 *
 * @return {Array.<string>} - List of buzzwords.
 */
function scrape() {
  /* global document */
  var SELECTOR = '#mw-content-text > ul li, .columns > ul li';

  return [].slice.call(document.querySelectorAll(SELECTOR))
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
    });
}

/**
 * Parse a list of buzzword-like values.
 *
 * @param {Array.<string>} values - Parsed values.
 * @return {Array.<string>} - Buzzwords.
 */
function parse(values) {
  values = values
    .map(function (value) {
      var match;

      /* Remove cites. */
      value = value.replace(/\[[^\]]+\]\*?/g, '');

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
      return head !== '-' && head !== '_';
    })
    .filter(function (value) {
      return value !== 'uc' && value !== 'that' && !/_blank_/.test(value);
    })
    .filter(Boolean);

  return values
    .filter(function (value, index) {
      return values.indexOf(value, index + 1) === -1;
    })
    .sort();
}
