var appMiddleware = function(app){
    // to avoid non json requests
    app.use(function (req, res, next){
        if (!req.is('application/json')) {
            res.status(401).send({"message":"please use json as content type"})
        }
        else next();
    })

};

module.exports = appMiddleware;