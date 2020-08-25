var fs = require('fs');
var path = require('path');

//create write stream
var logStream = fs.createWriteStream(path.join('error.log'), { flags: 'a' });


module.exports = logStream;
