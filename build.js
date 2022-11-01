import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

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
  const tree = unified().use(rehypeParse).parse(buf)

  const values = selectAll('.div-col > ul li', tree)
    .map(function (/** @type {import('hast').Element} */ node) {
      return toString(node.children[0])
    })
    .map(function (/** @type {string} */ value) {
      // Split comment from buzzword.
      const match = value.match(/^([\s\S+]+?)( [-–/] ?|\(|,)/)

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
      const head = value.charAt(0)
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
    'export const buzzwords = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
