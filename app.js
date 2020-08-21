require('dotenv').config();
var express = require("express");

var app = express();

var apiEmail = require('./routes/emailRoute.js')

var middlewares = require("./middlewares/generalMiddleware.js")(app);

app.use(apiEmail);

var routes = require("./routes/routes.js")(app);


var server = app.listen(3000, function () {
  
    console.log("Listening on port %s...", server.address().port);
});