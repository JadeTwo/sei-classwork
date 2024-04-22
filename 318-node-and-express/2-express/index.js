const express = require("express")

// require the filesystem module
const fs = require('fs')

const app = express()

const port = 3000

const userRoutes = require('./routes/user')

app.use("/user", userRoutes)

// serve static files from the styles directory
app.use(express.static("./styles"));

// define the template engine
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.get("/", (req, res) => {
  const options = {
    title: "Rendering Views with Express",
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br> \
      Generally, you won't want to create your own view engines, \
      but it important to understand how they work behind the scenes. \
      For a look at some popular view engines, check out the documentation for \
      <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
      <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
      <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
      More complete front-end libraries like React, Angular, and Vue \
      also have Express integrations.",
  };

  res.render("index", options);
});






//// 



app.use((req, res, next) => {
    console.log("1 : Request Received (middleware)");
    let check = true
    if (check) {
        next()
    } else {
        res.send('Error')
    }
});

// app.get('/', (req, res) => {
//     console.log('2 : got here (route)')
//     res.send('Hello! (from Server)')
// })

app.get('/bob', (req, res) => {
    // res.send('Express is pretty cool!')
    res.redirect('/')
    // res.json({
    //     name: 'Bob',
    //     occupation: 'Developer'
    // })
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})

// error handler
// app.use((err, req, res, next) => {
//   res.status(400).send(err.message);
// });