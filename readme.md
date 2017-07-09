# buzzwords [![Build Status][travis-badge]][travis]

List of _bleeding edge_ English buzzwords.

## Installation

[npm][]:

```bash
npm install buzzwords
```

## Usage

```js
var buzzwords = require('buzzwords');

buzzwords.length; //=> 251

console.log(buzzwords.slice(0, 10));
```

Yields:

```json
[
  "4g",
  "accountable talk",
  "adaptive learning",
  "aggregator",
  "agile",
  "ajax",
  "algorithm",
  "alignment",
  "analytics",
  "antifragile"
]
```

## API

### `buzzwords`

`buzzwords` exposes _big data_ as a list of strings (`Array.<string>`).

## Support

For a complete list of _next generation_ buzzwords and -phrases, see
[index.json][data].

Note that the _countless_ words listed in **buzzwords** might **not** be
buzzwords in certain contexts; the list just takes a _holistic approach_ in
_cloud computing_ with a _bleeding edge_ _algorithm_.

## Related

*   [`dale-chall`](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995)
*   [`fillers`](https://github.com/wooorm/fillers)
    — List of filler words
*   [`hedges`](https://github.com/wooorm/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/wooorm/profanities)
    — List of profane words
*   [`spache`](https://github.com/wooorm/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/wooorm/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/buzzwords.svg

[travis]: https://travis-ci.org/wooorm/buzzwords

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[data]: index.json
