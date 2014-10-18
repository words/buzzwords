'use strict';

/**
 * Dependencies.
 */

var fs,
    Scraper;

fs = require('fs');
Scraper = require('scraperjs');

/**
 * Scrape.
 */

function scrape() {
    return Array.prototype.slice.call(
            document.querySelectorAll('#mw-content-text > ul li')
        )
        .filter(function (node) {
            return !node.className.trim();
        })
        .filter(function (node) {
            return !/see also|external links/i.test(
                node.parentNode.previousElementSibling.textContent
            );
        })
        .map(function (node) {
            return node.textContent;
        });
}

function parse(values) {
    values = values.map(function (value) {
        var match;

        /*
         * Remove cites.
         */

        value = value.replace(/\[[^\]]+\]/g, '');

        /*
         * Split comment from buzz word.
         */

        match = value.match(/^([\s\S+]+?)( [-–/] ?|\()/);

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

/**
 * Scraper.
 */

Scraper.DynamicScraper.create(
    'http://en.wikipedia.org/wiki/List_of_buzzwords'
).scrape(scrape, function (results) {
    fs.writeFileSync('data/buzzwords.txt', parse(results).join('\n') + '\n');
});
