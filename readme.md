# buzzwords [![Build Status][travis-badge]][travis]

List of *bleeding edge* English buzzwords.

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

`buzzwords` exposes *big data* as a list of strings (`Array.<string>`).

## Support

For a complete list of *next generation* buzzwords and -phrases, see
[index.json][data].

Note that the *countless* words listed in **buzzwords** might **not** be
buzzwords in certain contexts; the list just takes a *holistic approach* in
*cloud computing* with a *bleeding edge* *algorithm*.

## Related

*   [`dale-chall`](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — List of filler words
*   [`hedges`](https://github.com/words/hedges)
    — List of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — List of profane words
*   [`spache`](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/buzzwords.svg

[travis]: https://travis-ci.org/words/buzzwords

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: index.json
