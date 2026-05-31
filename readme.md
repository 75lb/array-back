[![view on npm](https://badgen.net/npm/v/array-back)](https://www.npmjs.org/package/array-back)
[![npm module downloads](https://badgen.net/npm/dt/array-back)](https://www.npmjs.org/package/array-back)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/array-back)](https://github.com/75lb/array-back/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/array-back)](https://github.com/75lb/darray-back/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/array-back/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/array-back/actions/workflows/node.js.yml)

## array-back

Takes any input and guarantees an array back.

- Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
- Converts `undefined` to an empty array.
- Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
- Ignores input which is already an array.

#### Example

```js
> const arrayBack = require('array-back')
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

### arrayBack

Takes any input and guarantees an array back.

- **Type:** Exported Synchronous Function
- **Supported runtimes:** Node.Js >= v12
- **Module type:** JavaScript
- **Returns:** `Array`

| Param | Type | Description |
| --- | --- | --- |
| input | `any` | The input value to convert to an array |


### Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

From a Node CommonJS module:

```js
const arrayBack = (await import('array-back')).default
```

From a Node.js JavaScript Module:

```js
import arrayBack from 'array-back'
```

Within an modern browser JavaScript Module:

```js
import arrayBack from './node_modules/array-back/index.js'
```

* * *

&copy; 2015-26 [Lloyd Brookes](https://github.com/75lb) <opensource@75lb.com>.

