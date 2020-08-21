//change the message as needed

const message = req => { 
    return {
    from: process.env.EMAIL_USER, // server email
    to: process.env.EMAIL_RECEIVER, //email which receives the message
    replyTo: req.body.email,        //Online user
    subject: `email sent from the server by ${req.body.email} `, // Subject line
    text: req.body.message // Plain text body
}
}; 


module.exports = message;