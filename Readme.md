# buzzwords [![Build Status](https://img.shields.io/travis/wooorm/buzzwords.svg?style=flat)](https://travis-ci.org/wooorm/buzzwords) [![Coverage Status](https://img.shields.io/coveralls/wooorm/buzzwords.svg?style=flat)](https://coveralls.io/r/wooorm/buzzwords?branch=master)

List of _bleeding edge_ English buzzwords.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install buzzwords
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/buzzwords
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install buzzwords
```

[Duo](http://duojs.org/#getting-started):

```javascript
var buzzwords = require('wooorm/buzzwords');
```

UMD: globals, AMD, and CommonJS ([uncompressed](buzzwords.js) and [compressed](buzzwords.min.js)):

```html
<script src="path/to/buzzwords.js"></script>
<script>
  console.log(buzzwords);
</script>
```

## Usage

```javascript
var buzzwords = require('buzzwords');

buzzwords.is('cloud'); // true
buzzwords.is('unicorn'); // false

buzzwords.add('unicorn');
buzzwords.is('unicorn'); // true

buzzwords.remove('unicorn');
buzzwords.is('unicorn'); // false
```

## API

**buzzwords** exposes _big data_ using [the datalist-interface API](https://github.com/wooorm/datalist-interface#datalistinterfaceisword).

## Supported words

For a complete list of _next generation_ buzzwords and -phrases, see [Support.md](Support.md).

Note that the _countless_ words listed in **buzzwords** might **not** be buzzwords in certain contexts; the list just takes a _holistic approach_ in _cloud computing_ with a _bleeding edge_ _algorithm_.

## Data

Note that the list is scraped from [WikiPedia](http://en.wikipedia.org/wiki/List_of_buzzwords). WikiPedia’s licenses (Creative Commons Attribution-ShareAlike License) apply to the entries in the database. See WikiPedia’s copyright page for more information regarding licensing: http://en.wikipedia.org/wiki/Wikipedia:Copyrights

## Related

- [fillers](https://github.com/wooorm/fillers) — List of filler words;
- [hedges](https://github.com/wooorm/hedges) — List of hedge words;
- [profanities](https://github.com/wooorm/profanities) — List of profane words;
- [weasels](https://github.com/wooorm/weasels) — List of weasel words.

## License

MIT © [Titus Wormer](http://wooorm.com)
