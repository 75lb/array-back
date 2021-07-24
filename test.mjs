import Tom from 'test-object-model'
import arrayify from 'array-back'
import getAssert from 'isomorphic-assert'

async function getTom () {
  const a = await getAssert()
  const tom = new Tom('array-back')

  tom.test('if already array, do nothing', function () {
    const arr = [1, 2, 3]
    const result = arrayify(arr)
    a.equal(arr, result)
  })

  tom.test('arrayify()', function () {
    a.deepEqual(arrayify(undefined), [])
    a.deepEqual(arrayify(null), [null])
    a.deepEqual(arrayify(0), [0])
    a.deepEqual(arrayify([1, 2]), [1, 2])
    a.deepEqual(arrayify(new Set([1, 2])), [1, 2])

    function func () {
      a.deepEqual(arrayify(arguments), [1, 2, 3])
    }
    func(1, 2, 3)

    a.deepEqual(arrayify({ one: 1 }), [{ one: 1 }])
    const map = new Map()
    map.set('one', 1)
    map.set('two', 2)
    a.deepEqual(arrayify(map), [map])
  })

  return tom
}

export default getTom()
