const nodemailer = require('nodemailer');
require('dotenv').config(); // Ensure this is configured

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true
});

// Mail options
const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address (your email)
    to: 'davidngunzu511@gmail.com', // Your test recipient
    subject: 'Testing Nodemailer', // Subject
    text: 'This is a test email from Nodemailer', // Plain text version
    html: '<p>This is a test email from <b>Nodemailer</b>.</p>', // HTML version
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error('Error sending email:', error);
    }
    console.log('Email sent successfully:', info.response);
});
