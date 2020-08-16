var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(401)
        res.send(JSON.stringify({ message: "request method not allowed" }));
});
        
  
app.post("/email", function(req, res) {
    
        if(!req.body.name || !req.body.email || !req.body.message) {
            return (function (res){
                res.status(501);
                res.send({"status": "error", "message": "missing a parameter"});
            })(res);
            } else {
            return res.send(req.body);
        }
    });
    app.post("/", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(501)
        res.send({ "message": "wrong path, please use /email" });
    });
}


module.exports = appRouter;