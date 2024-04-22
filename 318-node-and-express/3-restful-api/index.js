const express = require('express')

const app = express()

const port = 3000

const posts = require('./data/posts')
const users = require('./data/users')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello! (from Server)')
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

app
    .route('/api/users')
    .get((req, res) => {
        res.json(users)
    })
    .post((req, res) => {
       console.log('req.body: ', req.body)

       if (req.body.name && req.body.username && req.body.email) {
        
        const foundUser = users.find((u) => u.username == req.body.username)
        
        if (foundUser) {
          res.json({ error: "Username Already Taken" });
          return;
        }
  
        const user = {
          id: users[users.length - 1].id + 1,
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
        };
  
        users.push(user);
        res.json(users[users.length - 1]);
      } else res.json({ error: "Insufficient Data" });

    })



app.get('/api/posts/:id', (req, res, next) => {
    const post = posts.find((post) => post.id == req.params.id)
    if (post) {
        res.json(post)
    } else {
        next()
    }
})

app.get('/api/users/:id', (req, res, next) => {
    const user = users.find((user) => user.id == req.params.id)
    if (user) {
        res.json(user)
    }
    else {
        next()
    }
})

// error-handling middleware
app.use((req, res, next) => {
    res.status = 404;
    res.json({ error: 'Resource Not Found' })
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})