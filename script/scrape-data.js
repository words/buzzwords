'use strict';

var fs, Scraper, scraper;

fs = require('fs');
Scraper = require('scraperjs').DynamicScraper;
scraper = Scraper.create('http://en.wikipedia.org/wiki/List_of_buzzwords');

function scrape() {
    var nodes = Array.prototype.slice.call(
        document.querySelectorAll('#mw-content-text > ul li')
    );

    return nodes
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
    values = values
        .map(function (value) {
            // Remove cites.
            value = value.replace(/\[[^\]]+\]/g, '');

            // Split comment from buzz word.
            var match = value.match(/^([\s\S+]+?)( [-–/] ?|\()/);

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

function save(results) {
    fs.writeFileSync('data/buzzwords.txt', parse(results).join('\n') + '\n');
}

scraper.scrape(scrape, save);
