var express = require("express")
var fs = require("fs")

var app = express()

app.use(express.json())

app.get('/api/comments/:id', (req, res, next) => {
    var data_received = req.body
    res.status(200).json(JSON.parse(fs.readFileSync('comments.json')))
})

app.get('/api/posts/:id', (req, res, next) => {
    res.status(200).json(JSON.parse(fs.readFileSync('posts.json')))
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})