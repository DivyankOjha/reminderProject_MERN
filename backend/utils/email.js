const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');
var smtpTransport = require('nodemailer-smtp-transport');

const sendEmail = async (options) => {
  const emailsettings = await Email.findById({
    _id: '604857825730c50bc8c128af',
  });
  console.log(emailsettings);
  // console.log('inside emal file');
  let host = emailsettings.host;
  let user = emailsettings.username;
  let pass = emailsettings.password;
  // console.log(host, user, pass);
  // let host = 'email-smtp.us-east-1.amazonaws.com'; // emailsettings.host;
  // let user = 'AKIA4XQNP4ANZQ5AEKPZ'; //emailsettings.username;
  // let pass = 'BA//6lhmHfVxY6VD2ka09CgmmnhPZzLJLRQ6DJrzCEPp'; //emailsettings.password;

  // 1 transporter
  //tls: { rejectUnauthorized: false },//  port: 587,
  // const transporter = nodemailer.createTransport({
  //   service: host,

  //   auth: {
  //     user: user,
  //     pass: pass,
  //   },
  // });
  // console.log(emailsettings);
  var transporter = nodemailer.createTransport(
    smtpTransport({
      host: host,
      tls: { rejectUnauthorized: true },
      secureConnection: true,
      port: 465,
      auth: {
        user: user,
        pass: pass,
      },
    })
  );

  //2 define email options
  const mailOptions = {
    from: `tookOne <support@digimonk.co>`,
    //from: `care@cuboidtechnologies.com`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };
  //3 Actually send the email

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
