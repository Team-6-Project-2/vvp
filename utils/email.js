const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const email = async (emailTo, emailSubject, emailText) => {
  let sgAuth = {
    auth: {
      api_key: process.env.SENDGIRD_API_KEY,
    },
  };

  let transporter = nodemailer.createTransport(sgTransport(sgAuth));

  let mailOptions = {
    from: process.env.SENDING_EMAIL_ADDRESS,
    to: emailTo,
    subject: emailSubject,
    text: emailText,
  };

  try {
    let mailer = await transporter.sendMail(mailOptions);
    return mailer;
  } catch (e) {
    return e;
  }
};

module.exports = email;
