const transport = require('../utils/transport.js');
const message = require('./message.js');


function mailing(req, res){
    if (validateRequest(req, res)){
    const data = req.body.message;
   
    try{
    transport.sendMail(message(data, res), function(err, info){
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

function validateRequest(req, res){
    let valid = true;
    //check valid if request is valid
    if ( !req.body.required || req.body.required.length <1 || !Array.isArray(req.body.required)){
        res.status(404);
        res.json({"message":"please input valid required field"});
        valid = false;
    }
    if( !req.body.message || Object.keys(req.body.message).length < 1){
        res.status(404);
        res.json({"message":"please input valid message field"});
        valid = false;
    }
    if (valid){
    const {required, message} = req.body //extracts variables from JSON
    
    required.forEach(
        key => {
            if(!message.hasOwnProperty(key)){
                let str =key + " is a required field";
                str = {"message": str}; 
                res.status(401).json(str);
                valid = false;
             }
            });
    }
    return valid;
        }
    
module.exports = mailing;