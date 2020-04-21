const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('songs'))

app.get('/music/:fileName', (req,res)=>{
    var file = fs.readFileSync(__dirname + `/songs/${req.params.fileName}`, 'binary');
    res.setHeader('Content-Length', file.length);
    res.write(file, 'binary');
    res.end();
})

app.get('/audio/:fileName', (req, res)=>{
    const path = __dirname + `/songs/${req.params.fileName}`
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize-1
        
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
            }
        
        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
        'Content-Length': fileSize,
        'Content-Type': 'audio/mp3',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))