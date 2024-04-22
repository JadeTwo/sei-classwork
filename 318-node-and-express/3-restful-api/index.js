const express = require('express')

const app = express()

const port = 3000

const posts = require('./data/posts')
const users = require('./data/users')

app.get('/', (req, res) => {
    res.send('Hello! (from Server)')
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.get('/api/posts/:id', (req, res) => {
    //     const post = posts.find((post) => post.id === Number(req.params.id))
    const post = posts.find((post) => post.id == req.params.id)
    console.log(post)
    res.json(post)
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id == req.params.id)
    console.log(user)
    res.json(user)
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})