const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
    console.log("User Request Time: ", Date.now());
    next();
});

router
  .route("/")
  .get((req, res) => {
    res.send(`Received a GET request for user!
        Try navigating to /user/somevalue/profile/somevalue.`);
  })
  .post((req, res) => {
    res.send("Received POST request at /users");
  });

router.get("/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

router.get("/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

router.get("/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});

router.get("/:userId/profile/:data", (req, res) => {
  console.log(req.params);
  res.send("Received GET request at /users");
});

// CommonJS 
module.exports = router;

// ES6 Modules
// export default { router }

