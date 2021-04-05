import fs from 'fs'
import https from 'https'
import {bail} from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
import $ from 'hast-util-select'
import toString from 'hast-util-to-string'

https.get('https://en.wikipedia.org/wiki/Buzzword', onresponse)

function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)

  var values = $.selectAll('.div-col > ul li', tree)
    .map(function (node) {
      return toString(node.children[0])
    })
    .map(function (value) {
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
    .filter(function (value) {
      var head = value.charAt(0)
      return value !== 'uc' && head !== '-' && head !== '_'
    })
    .filter(function (value, index, all) {
      return !all.includes(value, index + 1)
    })
    .sort()

  fs.writeFile(
    'index.js',
    'export var buzzwords = ' + JSON.stringify(values, null, 2) + '\n',
    bail
  )
}
