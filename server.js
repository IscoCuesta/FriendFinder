var express = require("express");

// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = require('./app/routing/apiRoutes')
const htmlRouter = require('./app/routing/htmlRoutes')

app.use('/api/friends', apiRouter);
app.use('/', htmlRouter);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });