import arrayBack from 'array-back'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('if already an array, do nothing', function () {
  const arr = [1, 2, 3]
  const result = arrayBack(arr)
  a.equal(arr, result)
})

test.set('if already an array-like, leave items untouched', function () {
  function testFn () {
    return arrayBack(arguments)
  }
  const result = testFn(undefined)
  a.deepEqual(result, [undefined])
})

test.set('arrayBack()', function () {
  a.deepEqual(arrayBack(undefined), [])
  a.deepEqual(arrayBack(null), [null])
  a.deepEqual(arrayBack(0), [0])
  a.deepEqual(arrayBack([1, 2]), [1, 2])
  a.deepEqual(arrayBack(new Set([1, 2])), [1, 2])

  function func () {
    a.deepEqual(arrayBack(arguments), [1, 2, 3])
  }
  func(1, 2, 3)

  a.deepEqual(arrayBack({ one: 1 }), [{ one: 1 }])
  const map = new Map()
  map.set('one', 1)
  map.set('two', 2)
  a.deepEqual(arrayBack(map), [map])
})

test.set('empty arguments should return an empty array', async function () {
  function testFn () {
    return arrayBack(arguments)
  }
  a.deepEqual(testFn(), [])
})

export { test, only, skip }
