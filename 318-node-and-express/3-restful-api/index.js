const express = require('express')

const app = express()

const port = 3000

const posts = require('./data/posts')
const users = require('./data/users')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello! (from Server)')
})

app
    .route('/api/posts')
    .get((req, res) => {
        res.json(posts)
    })
    .post((req, res) => {

    // Within the POST request route, we create a new
    // post with the data given by the client.
        if (req.body.userId && req.body.title && req.body.content) {

        const post = {
          id: posts[posts.length - 1].id + 1,
          userId: req.body.userId,
          title: req.body.title,
          content: req.body.content,
        };
  
        posts.push(post);
        res.json(posts[posts.length - 1]);
      } else res.json({ error: "Insufficient Data" });

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



app
    .route('/api/posts/:id')
    .get((req, res, next) => {
        const post = posts.find((post) => post.id == req.params.id)
        if (post) {
            res.json(post)
        } else {
            next()
        }
    })
    .patch((req, res) => {

        // Within the PATCH request route, we allow the client
        // to make changes to an existing post in the database.
        const post = posts.find((p, i) => {
            if (p.id == req.params.id) {
                for (const key in req.body) {
                    posts[i][key] = req.body[key];
                }
                return true;
            }
        });
    
        if (post) res.json(post);
        else next();

    })
    .delete((req, res) => {

    })

app
    .route('/api/users/:id')
    .get((req, res, next) => {
        const user = users.find((user) => user.id == req.params.id)
        if (user) {
            res.json(user)
        }
        else {
            next()
        }
    })
    .patch((req, res) => {

    })
    .delete((req, res) => {

    })

// error-handling middleware
app.use((req, res, next) => {
    res.status = 404;
    res.json({ error: 'Resource Not Found' })
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})