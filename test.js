'use strict';

/*
 * Dependencies.
 */

var buzzwords,
    assert;

buzzwords = require('./');
assert = require('assert');

/*
 * Tests.
 */

describe('buzzwords', function () {
    it('should be an `Object`', function () {
        assert(typeof buzzwords === 'object');
    });
});

describe('buzzwords.is(word)', function () {
    it('should return true if a word is a buzzword', function () {
        assert(buzzwords.is('cloud') === true);
    });

    it('should return false if a word is not a buzzword', function () {
        assert(buzzwords.is('unicorn') === false);
    });
});

describe('buzzwords.all()', function () {
    var all;

    all = buzzwords.all();

    it('should return an array', function () {
        assert('length' in all);

        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (value) {
            assert(value.toLowerCase() === value);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (value, index) {
            assert(all.indexOf(value, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(buzzwords.all().indexOf('unicorn') === -1);
    });
});

describe('buzzwords.add(buzzword) and buzzwords.remove(buzzword)',
    function () {
        it('should add and remove a buzzword', function () {
            assert(buzzwords.is('unicorn') === false);

            buzzwords.add('unicorn');

            assert(buzzwords.is('unicorn') === true);

            buzzwords.remove('unicorn');

            assert(buzzwords.is('unicorn') === false);
        });

        it('should add and remove multiple buzzwords', function () {
            assert(buzzwords.is('unicorn') === false);
            assert(buzzwords.is('rainbow') === false);

            buzzwords.add('unicorn', 'rainbow');

            assert(buzzwords.is('unicorn') === true);
            assert(buzzwords.is('rainbow') === true);

            buzzwords.remove('unicorn', 'rainbow');

            assert(buzzwords.is('unicorn') === false);
            assert(buzzwords.is('rainbow') === false);
        });

        it('should fail silently when removing a non-existing buzzword',
            function () {
                assert(buzzwords.is('unicorn') === false);

                buzzwords.remove('unicorn');

                assert(buzzwords.is('unicorn') === false);
            }
        );
    }
);
