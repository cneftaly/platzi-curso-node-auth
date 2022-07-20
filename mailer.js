const nodemailer = require("nodemailer");
const { config } = require('./config/config');

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.emailUser,
        pass: config.emailPassword
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Carlos Sosa <' + config.emailUser +'>', // sender address
    to: config.emailRecipient, // list of receivers
    subject: "Este es un nuevo correo", // Subject line
    text: "Hola Carlos", // plain text body
    html: "<b>Hola Carlos</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // hfhqmtyrigmkmzfq
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail();
