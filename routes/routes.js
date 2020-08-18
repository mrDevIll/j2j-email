var appRouter = function(app) {
    
    
    app.post("/email", function(req, res) {
         return res.send(req.body);
        });

    app.post("*", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(501);
        res.send({ "message": "wrong path, please use /email" });
    });
    
};


module.exports = appRouter;