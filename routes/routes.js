var appRouter = function(app) {
    
    
    app.post("/email", function(req, res) {
        if (!req.is('application/json')) {
            res.status(401).send({"message":"please use json as content type"})
        } else if(!req.body.name || !req.body.email || !req.body.message) {
            return res.status(501).send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });
    app.post("*", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(501);
        res.send({ "message": "wrong path, please use /email" });
    });

    app.all("*", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(401);
        res.send(JSON.stringify({ message: "request method not allowed" }));
});

};


module.exports = appRouter;