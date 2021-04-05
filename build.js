import fs from 'fs'
import https from 'https'
import {bail} from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
// @ts-ignore remove when typed
import $ from 'hast-util-select'
// @ts-ignore remove when typed
import toString from 'hast-util-to-string'

https.get('https://en.wikipedia.org/wiki/Buzzword', onresponse)

/**
 * @param {import('http').IncomingMessage} response
 */
function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var values = $.selectAll('.div-col > ul li', tree)
    .map(function (/** @type {import('hast').Element} */ node) {
      return toString(node.children[0])
    })
    .map(function (/** @type {string} */ value) {
      // Split comment from buzzword.
      var match = value.match(/^([\s\S+]+?)( [-–/] ?|\(|,)/)

      if (match) {
        value = match[1]
      }

      // Remove abbreviation from buzzword.
      value = value.replace(/^[A-Z]+[-–/] /, '')

      // Remove multiple cases.
      value = value.replace(/\/\w.+/, '')

      return value.toLowerCase().trim()
    })
    .filter(function (/** @type {string} */ value) {
      var head = value.charAt(0)
      return value !== 'uc' && head !== '-' && head !== '_'
    })
    .filter(function (
      /** @type {string} */ value,
      /** @type {number} */ index,
      /** @type {Array.<string>} */ all
    ) {
      return all.indexOf(value) === index
    })
    .sort()

  fs.writeFile(
    'index.js',
    'export var buzzwords = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
