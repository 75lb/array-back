import TestRunner from 'test-runner'
import arrayify from './index.mjs'
import a from 'assert'

const runner = new TestRunner()

runner.test('if already array, do nothing', function () {
  const arr = [ 1,2,3 ]
  const result = arrayify(arr)
  a.strictEqual(arr, result)
})

runner.test('arrayify()', function () {
  a.deepStrictEqual(arrayify(undefined), [])
  a.deepStrictEqual(arrayify(null), [ null ])
  a.deepStrictEqual(arrayify(0), [ 0 ])
  a.deepStrictEqual(arrayify([ 1, 2 ]), [ 1, 2 ])

  function func () {
    a.deepStrictEqual(arrayify(arguments), [ 1, 2, 3 ])
  }
  func(1, 2, 3)
})
