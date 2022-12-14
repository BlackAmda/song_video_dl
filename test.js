(async () => {
    const svdl = require('./index')
    const config = {
        type: 'video', // audio or video
        quality: 360, // Quality of the video or audio (kbps or p)
        server: 'en68' // This is optional ('en136', 'id4', 'en60', 'en61', 'en68')
    }
    
    const result = await svdl.download('https://www.youtube.com/watch?v=XUZaf-_jQOE', config)
    console.log(result)
})()