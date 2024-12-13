const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: 'rishithak2018@gmail.com',
        pass: 'bbbj nozv ihsv haje',
    },
});

module.exports = transporter;