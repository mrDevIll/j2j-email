const transport = require('./transport.js');
const message = require('./message.js');
const validateRequest = require('./validateRequest.js');

async function mailing(req, res){
    if (validateRequest(req, res)){
    const data = req.body.message;
   
    try{
    await transport.sendMail(message(data, res), function(err, info){
        if(err){
            console.log(err);
            res.status(501);
            res.json({"message": "there was an error sending the email"});
            
        }else {
            console.log(info);
            res.status(250);
            res.json({"message": "email sent"});
            
        }
    })
    }
    catch(e){
        console.log(e);
            res.status(501);
            res.json({"message": "failure to send the email"});
    }       
}}


    
module.exports = mailing;