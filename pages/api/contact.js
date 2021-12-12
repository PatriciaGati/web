require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
export default async function (req, res) {
    const {firstname, lastname, email, subject, message} = req.body
    
    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {

          user: `${process.env.GMAIL_EMAIL}`,
          pass: `${process.env.GMAIL_PASSWORD}`

        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `${email}`, // sender address
        to: `${process.env.GMAIL_EMAIL_TO}`, // list of receivers
        subject: `Message From ${req.body.firstname}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.status(200)

  }