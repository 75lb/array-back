'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var TestRunner = _interopDefault(require('test-runner'));
var a = _interopDefault(require('assert'));

/**
 * Takes any input and guarantees an array back.
 *
 * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
 * - Converts `undefined` to an empty array.
 * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
 * - Ignores input which is already an array.
 *
 * @module array-back
 * @example
 * > const arrayify = require('array-back')
 *
 * > arrayify(undefined)
 * []
 *
 * > arrayify(null)
 * [ null ]
 *
 * > arrayify(0)
 * [ 0 ]
 *
 * > arrayify([ 1, 2 ])
 * [ 1, 2 ]
 *
 * > arrayify(new Set([ 1, 2 ]))
 * [ 1, 2 ]
 *
 * > function f(){ return arrayify(arguments); }
 * > f(1,2,3)
 * [ 1, 2, 3 ]
 */

function isObject (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number'
}

/**
 * @param {*} - The input value to convert to an array
 * @returns {Array}
 * @alias module:array-back
 */
function arrayify (input) {
  if (Array.isArray(input)) {
    return input
  }

  if (input === undefined) {
    return []
  }

  if (isArrayLike(input) || input instanceof Set) {
    return Array.from(input)
  }

  return [ input ]
}

const runner = new TestRunner();

runner.test('if already array, do nothing', function () {
  const arr = [ 1, 2, 3 ];
  const result = arrayify(arr);
  a.strictEqual(arr, result);
});

runner.test('arrayify()', function () {
  a.deepStrictEqual(arrayify(undefined), []);
  a.deepStrictEqual(arrayify(null), [ null ]);
  a.deepStrictEqual(arrayify(0), [ 0 ]);
  a.deepStrictEqual(arrayify([ 1, 2 ]), [ 1, 2 ]);
  a.deepStrictEqual(arrayify(new Set([ 1, 2 ])), [ 1, 2 ]);

  function func () {
    a.deepStrictEqual(arrayify(arguments), [ 1, 2, 3 ]);
  }
  func(1, 2, 3);

  a.deepStrictEqual(arrayify({ one: 1 }), [ { one: 1 } ]);
  const map = new Map();
  map.set('one', 1);
  map.set('two', 2);
  a.deepStrictEqual(arrayify(map), [ map ]);
});
