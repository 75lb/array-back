'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var TestRunner = _interopDefault(require('test-runner'));
var a = _interopDefault(require('assert'));

/**
 * Takes any input and guarantees an array back.
 *
 * - converts array-like objects (e.g. `arguments`) to a real array
 * - converts `undefined` to an empty array
 * - converts any another other, singular value (including `null`) into an array containing that value
 * - ignores input which is already an array
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
 * > function f(){ return arrayify(arguments); }
 * > f(1,2,3)
 * [ 1, 2, 3 ]
 */

function isObject (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number' || input instanceof Set
}

/**
 * @param {*} - the input value to convert to an array
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

  if (isArrayLike(input)) {
    return Array.from(input)
  }

  return [ input ]
}

const runner = new TestRunner();

runner.test('if already array, do nothing', function () {
  const arr = [ 1,2,3 ];
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

  a.deepStrictEqual(arrayify({one: 1}), [ {one: 1} ]);
  const map = new Map();
  map.set('one', 1);
  map.set('two', 2);
  a.deepStrictEqual(arrayify(map), [ map ]);
});
