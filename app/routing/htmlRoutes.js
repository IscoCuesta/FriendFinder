var express = require("express");
var path = require("path");
var fs = require("fs")

// Create express app instance.
var app = express();

var router = express.Router()





router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});




module.exports = router;

