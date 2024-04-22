const express = require('express')

const router = express.Router()

const posts = require('../data/posts')

// find a specific user's posts 
router.get('/userId/:userId', (req, res) => {
    console.log('test')
    let filteredPosts = posts.filter(p => p.userId == req.params.userId)
    res.json(filteredPosts)
})

router
    .route('/')
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


router
    .route('/:id')
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

        // The DELETE request route simply removes a resource.
        const post = posts.find((p, i) => {
            if (p.id == req.params.id) {
                posts.splice(i, 1);
                return true;
            }
        });
  
      if (post) res.json(post);
      else next();

    })

module.exports = router