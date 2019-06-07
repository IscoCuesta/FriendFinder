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

router.post("/api/friends", function(req, res) {
    fs.readFile('app/data/friends.js', (err, data) => {
        if (err) throw err;
        var friends = JSON.parse(data);
        var arrFriends = [];
        var user = req.body;
        console.log("request data" , req.body);
        var difscores = 0;
        var best = 0;
        var usermatch = 0

        for(var i=0; i<friends.length; i++){
            difscores = 0;
            arrFriends.push(friends[i]);
            for(var j =0; j<10; j++){
                difscores += Math.abs(friends[i].scores[j] - user.scores[j])
            };
            if(difscores<best){
                best = difscores;
                usermatch = i;
            };
        };


        arrFriends.push(user)
        fs.writeFile('app/data/friends.js', JSON.stringify(arrFriends), function(error){
            if(error) throw error;
        })
        res.send(friends[usermatch]);
      });


      

});


module.exports = router;

