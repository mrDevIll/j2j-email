var bodyParser = require("body-parser");


var appMiddleware = function(app){

    //conf middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    

    // to avoid non json requests
    app.use(function (req, res, next){
        if (!req.is('application/json')) {
            res.status(401).send({"message":"please use json as content type"})
        }
        else next();
    })

};

module.exports = appMiddleware;