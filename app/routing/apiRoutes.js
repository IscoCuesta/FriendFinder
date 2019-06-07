var express = require("express");
var path = require("path");
var fs = require("fs")

// Create express app instance.
var app = express();

var router = express.Router()





router.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.js"));
});

router.post("/api/friends", function(req, res) {
    fs.readFile('../data/friends.js', (err, data) => {
        if (err) throw err;
        var friends = JSON.parse(data)
        var arrFriends = [];
        console.log(data,friends);

        for(var i=0; i<friends.length; i++){

        }


        arrFriends.push(req.body)
        fs.writeFile('../data/friends.js', JSON.stringify(arrFriends), function(error){
            if(error) throw error;
        })
      });


      
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports = router;