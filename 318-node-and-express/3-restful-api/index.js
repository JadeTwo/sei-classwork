const express = require('express')

const app = express()

const port = 3000

const posts = require('./data/posts')
const users = require('./data/users')

app.get('/', (req, res) => {
    res.send('Hello! (from Server)')
})

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})