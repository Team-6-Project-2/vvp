// Add SMTP credentials to app.js
var app = require('express')(),
  mailer = require('express-mailer');

// let hostname = "hostname from account page";
let hostname = process.env.MAIL_HOST;
// let username = "username from account page";
let username = process.env.MAIL_USERNAME;
// let password = "password from account page";
let password = process.env.MAIL_PASSWORD;

mailer.extend(app, {
  from: 'viktoriia@viktoriiasvaxxpassport.com',
  host: hostname,
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: username,
    pass: password,
  },
});
