var express = require("express");
var bodyParser = require("body-parser");
const appMiddleware = require("./middlewares/middleware.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var middlewares = require("./middlewares/middleware.js")(app);

var routes = require("./routes/routes.js")(app);


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});