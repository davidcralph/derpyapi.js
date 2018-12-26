# derpyapi.js
Official node.js wrapper for the Derpy API

**Installation**

``npm install derpyapi.js`` (or ``yarn add derpyapi.js`` if you're cool)

**Example**

Async 
```js
const { miku } = require('derpyapi.js');

async function getMiku() {
  const gang = await miku();
  return gang;
}

console.log(getMiku());
```
Sync
```js
const { miku } = require('derpyapi.js');

miku().then(res => console.log(res)).catch(err => console.log(err));
```

**Methods**
```
GET /img
Returns random wallpaper/gif
Example: /takagi
Options: 
Wallpaper: /takagi, /miku, /ddlc,
Gif:  /k_on, /lovelive, /konosuba, /sao
NSFW: /nekopara  (?type=gif also works if you like gifs), /overwatch

GET /text
Modifies given text
Example: /flip?text=uwu
Options: /mock, /flip, /reverse, /flip, /leet, /cramp, /space, /indicator, /aesthetic, /tiny, /clapify, /eyeify

GET /imagegen
Generates good quality memes yes
Example: /kirb?text=qts are qt af, /jpeg?url=https://<url>
Options: 
URL: /jpeg, /invert, /flip, /grayscale, /blur, /pillow
Text: /letter, /paper, /kirb
```

**Credits**

[August](https://github.com/auguwu) for originally updating stuff

[Speyd3r](https://github.com/Speyd3r) for hosting API <3
