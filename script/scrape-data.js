'use strict';

/*
 * Dependencies.
 */

var fs = require('fs');
var Scraper = require('scraperjs');

/**
 * Scrape.
 *
 * @return {Array.<string>}
 */
function scrape() {
    return Array.prototype.slice.call(document.querySelectorAll(
            '#mw-content-text > ul li, .columns > ul li'
        ))
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
            return node.textContent;
        });
}

/**
 * Parse a list of buzzword-like values.
 *
 * @param {Array.<string>} values
 * @return {Array.<string>}
 */
function parse(values) {
    values = values.map(function (value) {
        var match;

        /*
         * Remove cites.
         */

        value = value.replace(/\[[^\]]+\]\*?/g, '');

        /*
         * Remove initial (incorrect) dash.
         */

        value = value.replace(/^-\s*/g, '');

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
        return Boolean(value);
    });

    return values.filter(function (value, index) {
        return values.indexOf(value, index + 1) === -1;
    });
}

/*
 * Scraper.
 */

Scraper.DynamicScraper.create(
    'http://en.wikipedia.org/wiki/List_of_buzzwords'
).scrape(scrape, function (results) {
    fs.writeFileSync('data/buzzwords.txt', parse(results).join('\n') + '\n');
});
