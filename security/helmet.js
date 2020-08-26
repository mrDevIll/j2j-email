const helmet = require("helmet");
 
module.exports = function(app){
    if(process.env.HELMET){
       app.use(helmet());
    }
    
};


