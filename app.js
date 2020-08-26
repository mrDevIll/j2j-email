require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


//config middleware
var logFile = require('./logs/logs.js')(app);

var security = require('./security/helmet.js')(app);

var middlewares = require("./validation/middleware.js")(app);

//routing JSON posts from /email
var apiEmail = require('./email/emailRoute.js');

app.use(apiEmail);

//managing different routes
var routes = require("./validation/routes.js")(app);


// open server
var server = app.listen(port, function () {
  
    console.log("Listening on port %s...", server.address().port);
});