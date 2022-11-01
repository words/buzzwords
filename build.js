import {promises as fs} from 'node:fs'
import fetch from 'node-fetch'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const response = await fetch('https://en.wikipedia.org/wiki/Buzzword')
const body = await response.text()
const tree = unified().use(rehypeParse).parse(body)
const elements = selectAll('.div-col > ul li', tree)
const names = elements.map((node) => toString(node.children[0]))
const clean = names.map((value) => {
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
const filtered = clean.filter((value) => {
  return (
    value !== 'uc' &&
    !value.startsWith('-') &&
    !value.startsWith('_') &&
    !value.startsWith('$_')
  )
})

const values = [...new Set(filtered)].sort()

await fs.writeFile(
  'index.js',
  'export const buzzwords = ' + JSON.stringify(values, null, 2) + '\n'
)
