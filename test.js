import assert from 'node:assert'
import test from 'node:test'
import {buzzwords} from './index.js'

test('buzzwords', function () {
  assert.equal(Array.isArray(buzzwords), true, 'should be an array')
  assert.notEqual(buzzwords.indexOf('millennial'), -1, 'should contain words')
})
