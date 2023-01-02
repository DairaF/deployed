const nodemailer = require('nodemailer');

const createTrans = () =>{ 
    const transport =  nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "52966555a17a4c",
          pass: "f6a4bcff8ed390"
        }
    });
    return transport;
}

const sendMail = async (email, subject, mailBody, htmlBody) => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: '"Moi" <testing@mailtrap.com>', 
        to: email,
        subject: subject,
        text: mailBody,
        html: htmlBody
        });
        return
}

exports.sendMail = (email, subject, mailBody,htmlBody) => sendMail(email, subject, mailBody,htmlBody);