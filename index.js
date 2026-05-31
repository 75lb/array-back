/*☭
## array-back

Takes any input and guarantees an array back.

- Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
- Converts `undefined` to an empty array.
- Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
- Ignores input which is already an array.

#### Example

```js
> arrayBack(undefined)
[]

> arrayBack(null)
[ null ]

> arrayBack(0)
[ 0 ]

> arrayBack([ 1, 2 ])
[ 1, 2 ]

> arrayBack(new Set([ 1, 2 ]))
[ 1, 2 ]

> function f(){ return arrayBack(arguments); }
> f(1,2,3)
[ 1, 2, 3 ]
```
*/

function isObject (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number'
}

/*☭
### arrayBack

Takes any input and guarantees an array back.

- **Type:** Exported Synchronous Function
- **Supported runtimes:** Node.Js >= v12
- **Module type:** JavaScript
- **Returns:** `Array`

¬
  Param
  Type
  Description
¬
  input
  `any`
  The input value to convert to an array
¬

࿕
id: Something
*/
function arrayBack (input) {
  if (Array.isArray(input)) {
    return input
  } else if (input === undefined) {
    return []
  } else if (isArrayLike(input) || input instanceof Set) {
    return Array.from(input)
  } else {
    return [input]
  }
}

export default arrayBack
