# **Song Video Downloader** - A Web Scrape NPM package of y2mate.com

This is a youtube song and video downloader based on **[y2mate.com](https://y2mate.com/)**. This project is based on Javascript.

_Coded by: [Black Amda](https://github.com/BlackAmda)_

## Installation
```
npm i @blackamda/song_video_dl
```

## Usage
```js
const svdl = require("@blackamda/song_video_dl")
```

## Methods

### svdl.download()
Code:
```js
const svdl = require("@blackamda/song_video_dl")

const config = {
    type: 'video', // audio or video
    quality: 360, // Quality of the video or audio (kbps or p)
    server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
}

const result = await svdl.download('https://www.youtube.com/watch?v=XUZaf-_jQOE', config)
console.log(result)
```

Result:
```json
{
  "title": "Skeleton Meme Template",
  "thumb": "https://i.ytimg.com/vi/XUZaf-_jQOE/0.jpg",
  "size": "268.3 KB",
  "link": "https://dl151.y2mate.com/?file=......"
}
```

## License
This project is protected by the `GNU General Public License v3.0.`

## Disclaimer
`Song Video Downloader` name, we have nothing to do with the website officially. If any complains please contact via sl.amdakolla@gmail.com