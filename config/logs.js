var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

// create a write stream
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

var logFile = function(app){

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

};

module.exports = logFile;