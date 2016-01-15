/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module buzzwords:script:build-data
 * @fileoverview Generate a database.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var Scraper = require('scraperjs');

/*
 * Constants.
 */

var INPUT = 'http://en.wikipedia.org/wiki/List_of_buzzwords';
var OUTPUT = path.join('data', 'index.json');

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
    values = values.map(function (value) {
        var match;

        /*
         * Remove cites.
         */

        value = value.replace(/\[[^\]]+\]\*?/g, '');

        /*
         * Split comment from buzz word.
         */

        match = value.match(/^([\s\S+]+?)( [-–/] ?|\(|,)/);

        if (match) {
            value = match[1];
        }

        return value.toLowerCase().trim();
    })
    .filter(function (value) {
        return value.charAt(0) !== '-';
    })
    .filter(Boolean);

    return values.filter(function (value, index) {
        return values.indexOf(value, index + 1) === -1;
    }).sort();
}

/*
 * Scraper.
 */

Scraper.DynamicScraper.create(INPUT).scrape(scrape, function (results) {
    fs.writeFileSync(OUTPUT, JSON.stringify(parse(results), null, 2) + '\n');
});
