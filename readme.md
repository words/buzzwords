# buzzwords

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *bleeding edge* English buzzwords.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install buzzwords
```

## Use

```js
import {buzzwords} from 'buzzwords'

console.log(buzzwords.length) //=> 274

console.log(buzzwords.slice(0, 10))
```

Yields:

```js
[
  '4g',
  '5g',
  'accountable talk',
  'agile',
  'ajax',
  'algorithm',
  'alignment',
  'ambiguity',
  'amplify',
  'analytics'
]
```

## API

This package exports the following identifiers: `buzzwords`.
There is no default export.

### `buzzwords`

`buzzwords` exposes *big data* as a list of strings (`Array.<string>`).

## Support

For a complete list of *next generation* buzzwords and -phrases, see
[`index.js`][data].

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

[build-badge]: https://github.com/words/buzzwords/workflows/main/badge.svg

[build]: https://github.com/words/buzzwords/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/buzzwords.svg

[coverage]: https://codecov.io/github/words/buzzwords

[downloads-badge]: https://img.shields.io/npm/dm/buzzwords.svg

[downloads]: https://www.npmjs.com/package/buzzwords

[size-badge]: https://img.shields.io/bundlephobia/minzip/buzzwords.svg

[size]: https://bundlephobia.com/result?p=buzzwords

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[data]: index.js
