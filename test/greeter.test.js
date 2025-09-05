import assert from 'node:assert'
import { describe, it } from 'node:test'

import { greet } from '../src/greet/greeter.js'

describe('Greeter', () => {
  describe('.greet()', () => {
    const helloWorld = 'Hello World!'
    it(`Returns '${helloWorld}' when name ommited`, () => {
      assert.equal(greet(), helloWorld)
    })

    const testName = 'Dušan'
    const helloName = `Hello ${testName}!`
    it(`Returns '${helloName}' when '${testName}' is supplied as the name argument`, () => {
      assert.equal(greet(testName), helloName)
    })
  })
})
