[![view on npm](http://img.shields.io/npm/v/array-back.svg)](https://www.npmjs.org/package/array-back)
[![npm module downloads per month](http://img.shields.io/npm/dm/array-back.svg)](https://www.npmjs.org/package/array-back)
[![Build Status](https://travis-ci.org/75lb/array-back.svg?branch=master)](https://travis-ci.org/75lb/array-back)
[![Dependency Status](https://david-dm.org/75lb/array-back.svg)](https://david-dm.org/75lb/array-back)

# array-back
Guarantees an array back. 

```js
> arrayify = require("array-back")

> arrayify(0)
[ 0 ]

> arrayify("hi")
[ 'hi' ]

> arrayify(null)
[ null ]

> arrayify(undefined)
[]

> arrayify({ one: 1 })
[ { one: 1 } ]

> arrayify([ "already", "an", "array" ])
[ 'already', 'an', 'array' ]

> function f(){ return arrayify(arguments); }
> f(1, 2, 3)
[ 1, 2, 3 ]
```

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>.
