const express = require('express');
const userRoutes = express.Router();

userRoutes.post("/signup", function(req, res) {
    res.send("Sign up");
})

userRoutes.post("/signin", function(req, res) {
    res.send("Sign in");
})


module.exports = userRoutes;