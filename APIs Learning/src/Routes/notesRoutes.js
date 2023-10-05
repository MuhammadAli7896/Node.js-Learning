const express = require('express');
const noteRoutes = express.Router();

noteRoutes.get("/", function (req, res) {
    res.send("Note get");
})

noteRoutes.post("/", function (req, res) {
    res.send("Note post");
})


module.exports = noteRoutes;