const transport = require('./transport.js');
const message = require('./message.js');


function mailing(req, res){

    transport.sendMail(message(req), function(err, info){
        if(err){
            console.log(err);
            res.setHeader('Content-Type', 'application/json');
            res.status(501);
            res.send({"message": "there was an error sending the email"});
            
        }else {
            console.log(info);
            res.setHeader('Content-Type', 'application/json');
            res.status(250);
            res.send({"message": "email sent"});
            
        }
    })
}

module.exports = mailing;