# buzzwords [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of _bleeding edge_ English buzzwords.

## Installation

[npm][npm-install]:

```bash
npm install buzzwords
```

**buzzwords** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var buzzwords = require("buzzwords");

buzzwords.length; // 162

console.log(buzzwords.slice(0, 10));
```

Yields:

```json
[
  "a bit",
  "about",
  "actually",
  "allege",
  "alleged",
  "almost",
  "almost never",
  "always",
  "and all that",
  "and so forth"
]
```

## API

### `buzzwords`

**Type**: `Array.<string>` — **buzzwords** exposes _big data_ as an
list of strings.

## Support

For a complete list of _next generation_ buzzwords and -phrases, see
[support.md][support].

Note that the _countless_ words listed in **buzzwords** might **not** be
buzzwords in certain contexts; the list just takes a _holistic approach_ in
_cloud computing_ with a _bleeding edge_ _algorithm_.

## Related

*   [dale-chall](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995);

*   [fillers](https://github.com/wooorm/fillers)
    — List of filler words;

*   [hedges](https://github.com/wooorm/hedges)
    — List of hedge words;

*   [profanities](https://github.com/wooorm/profanities)
    — List of profane words;

*   [spache](https://github.com/wooorm/spache)
    — List of simple American-English words (1974);

*   [weasels](https://github.com/wooorm/weasels)
    — List of weasel words.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/buzzwords.svg

[travis]: https://travis-ci.org/wooorm/buzzwords

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/buzzwords.svg

[codecov]: https://codecov.io/github/wooorm/buzzwords

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/buzzwords/releases

[license]: LICENSE

[support]: support.md

[author]: http://wooorm.com
