const nodemailer = require('nodemailer');

//setting for nodemailer

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE,
    auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PSWD
    }
});

module.exports = transport;