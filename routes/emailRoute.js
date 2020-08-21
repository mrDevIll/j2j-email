var express = require("express");
const api = express.Router(); 
const mailing = require('../config/emailMessage.js')


api.post("/email", function(req, res){

    mailing(req, res)
} 
);

module.exports= api;