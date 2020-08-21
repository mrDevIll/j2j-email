
var appRouters = function(app) {
       
    

    app.post("*", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.status(501);
        res.send({ "message": "wrong path, please use /email" });
    });

    app.all("*", function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.status(501);
        res.send({ "message": "wrong method" });
    })
    
};


module.exports = appRouters;