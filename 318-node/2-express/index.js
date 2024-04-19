const express = require("express")

const app = express()

const port = 3000

const userRoutes = require('./routes/user')

app.use("/user", userRoutes)

// error handler
// app.use((err, req, res, next) => {
//   res.status(400).send(err.message);
// });


app.use((req, res, next) => {
    console.log("1 : Request Received (middleware)");
    let check = true
    if (check) {
        next()
    } else {
        res.send('Error')
    }
});

app.get('/', (req, res) => {
    console.log('2 : got here (route)')
    res.send('Hello! (from Server)')
})

app.get('/express', (req, res) => {
    res.send('Express is pretty cool!')
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})