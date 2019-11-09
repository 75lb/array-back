import TestRunner from 'test-runner'
import arrayify from './index.mjs'
import a from 'assert'

const tom = new TestRunner.Tom('array-back')

tom.test('if already array, do nothing', function () {
  const arr = [1, 2, 3]
  const result = arrayify(arr)
  a.strictEqual(arr, result)
})

tom.test('arrayify()', function () {
  a.deepStrictEqual(arrayify(undefined), [])
  a.deepStrictEqual(arrayify(null), [null])
  a.deepStrictEqual(arrayify(0), [0])
  a.deepStrictEqual(arrayify([1, 2]), [1, 2])
  a.deepStrictEqual(arrayify(new Set([1, 2])), [1, 2])

  function func () {
    a.deepStrictEqual(arrayify(arguments), [1, 2, 3])
  }
  func(1, 2, 3)

  a.deepStrictEqual(arrayify({ one: 1 }), [{ one: 1 }])
  const map = new Map()
  map.set('one', 1)
  map.set('two', 2)
  a.deepStrictEqual(arrayify(map), [map])
})

export default tom
