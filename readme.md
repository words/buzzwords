# buzzwords

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of *bleeding edge* English buzzwords.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`buzzwords`](#buzzwords-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package is a list of English buzzwords from [Wikipedia][wiki].

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+), install with [npm][]:

```sh
npm install buzzwords
```

In Deno with [`esm.sh`][esmsh]:

```js
import {buzzwords} from 'https://esm.sh/buzzwords@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {buzzwords} from 'https://esm.sh/buzzwords@2?bundle'
</script>
```

## Use

```js
import {buzzwords} from 'buzzwords'

console.log(buzzwords.length) //=> 322

console.log(buzzwords.slice(0, 10))
```

Yields:

```js
[
  '4g',
  '5g',
  'accountable talk',
  'adaptive interface',
  'agile',
  'ajax',
  'algorithm',
  'alignment',
  'ambient environment',
  'ambiguity'
]
```

## API

This package exports the identifier `buzzwords`.
There is no default export.

### `buzzwords`

`buzzwords` exposes *big data* as a list of strings (`Array<string>`).

## Data

For a complete list of *next generation* buzzwords and -phrases, see
[`index.js`][data].

> 👉 **Note**: the *countless* words listed in **buzzwords** might **not** be
> buzzwords in certain contexts; the list just takes a *holistic approach* in
> *cloud computing* with a *bleeding edge* *algorithm*.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`dale-chall`](https://github.com/words/dale-chall)
    — list of familiar American-English words (1995)
*   [`fillers`](https://github.com/words/fillers)
    — list of filler words
*   [`hedges`](https://github.com/words/hedges)
    — list of hedge words
*   [`profanities`](https://github.com/words/profanities)
    — list of profane words
*   [`spache`](https://github.com/words/spache)
    — list of simple American-English words (1974)
*   [`weasels`](https://github.com/words/weasels)
    — list of weasel words

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[data]: index.js

[wiki]: https://en.wikipedia.org/wiki/Buzzword
