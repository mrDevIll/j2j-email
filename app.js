require('dotenv').config();
var express = require("express");
var app = express();

//config middleware
var logFile = require('./config/logs.js')(app);
var middlewares = require("./middlewares/generalMiddleware.js")(app);

//routing JSON posts from /email
var apiEmail = require('./routes/emailRoute.js');

app.use(apiEmail);

//managing different routes
var routes = require("./routes/routes.js")(app);


// open server
var server = app.listen(3100, function () {
  
    console.log("Listening on port %s...", server.address().port);
});