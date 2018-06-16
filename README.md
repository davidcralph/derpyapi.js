# derpy.js
Official node.js wrapper for the ohlookitsderpy.space API


**Installation**

``npm install derpy.js``

**Usage**

```js
const derpy = require("derpy.js");

derpy.miku().then(res => console.log(res)).catch(err => console.log(err));

```

**Methods**

``.miku()`` - Get a random miku wallpaper

``.ddlc`` - Get a random DDLC wallpaper

``.lovelive()`` - Get a random love live gif

``.k_on()`` - Get a random k-on gif

**Credits**

August for updating stuff TM
