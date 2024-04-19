const express = require("express")

const app = express()

const port = 3000

app.get('/', (req, res) => {
    console.log('got here')
    res.send('Hello! (from Server)')
})

app.get('/express', (req, res) => {
    res.send('Express is pretty cool!')
})

app.get('/users/:userId/profile/:data', (req, res) => {
    console.log(req.params)
    res.send('Received GET request at /users')
})

app.post('/users', (req, res) => {
    res.send('Received POST request at /users')
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})