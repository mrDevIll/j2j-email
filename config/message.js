const Mail = require("nodemailer/lib/mailer");



const message = (data, res) => { 
    const subjectEmail = process.env.EMAIL_SUBJECT || "email from server"; // subject email
    const dataToText = data => {
        let str = "message from the server: ";
        for (key in data){
            str +=` ${key}: ${data[key]} `
        }
        return str.toString();
    }
    
   console.log(data.email)
    try{
    return {
    from: process.env.EMAIL_USER, // server email
    to: process.env.EMAIL_RECEIVER, //email which receives the message
    replyTo: data.email || "noreplyEmail@mail.com",        //Online user email if 
    text: dataToText(data), 
    subject: subjectEmail,
    }
    }catch(e){
        console.log(e);
        res.status(250);
        res.json({"message": "error with the email message"});
        
    }
}; 

module.exports = message;