# derpy.js
Official node.js wrapper for the ohlookitsderpy.space API

**Installation**

``npm install derpy.js``

**Example**

```js
const derpy = require("derpy.js");

derpy.miku().then(res => console.log(res)).catch(err => console.log(err));

```

**Methods**

``.miku()`` - Get a random Miku wallpaper

``.ddlc()`` - Get a random DDLC wallpaper

``.lovelive()`` - Get a random Love Live gif

``.takagi()`` - Get a random Takagi-san image

**Credits**

August for updating stuff TM
