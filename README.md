# vvp

Viktoriias Vax Password Group Project #2 Team 6

1. purchase custom domain name
2. setup office365 email with 1 vanity username (viktoriia)
3. upgrade heroku instance to hobby instance so we can run certs against an app that's deployed to a custom domain name
   https://app.sendgrid.com/settings/api_keys
   heroku run bash --app=techblog-hw14

4. https://devcenter.heroku.com/articles/automated-certificate-management#view-your-certificate-status
   3.viktoriiavcaxxpassport.com domain
5. setup domain with heroku
   heroku apps --team=codeteam6

$ heroku certs:auto --app=viktoriiasvaxxpassport

heroku run --app viktoriiasvaxxpassport bash
how to setup domain name with godaddy domain
https://successengineer.medium.com/how-to-setup-heroku-with-godaddy-d8e936d10849

https://levelup.gitconnected.com/how-to-connect-a-godaddy-domain-to-a-deployed-heroku-react-app-9b8809d858c0

how to send email: https://docs.cloudmailin.com/outbound/examples/send_email_with_node_js/
how to send emails with express: https://docs.cloudmailin.com/outbound/examples/send_email_with_node_js/#sending-mail-with-express

npm install cloudmailin
npm install express-mailer

---

# Things Learned

GMAIL has a feature called "task-specific email addresses". In short, if your email address is username@gmail.com, with GMAIL you can also get email at username+anything@gmail.com. GMAIL will accept pretty much anything after the plus, and route that to the USERNAME. This is particularly useful for testing emails and making sure that emails are being sent properly.

However

When validation is unique is enabled in MYSQL on EMAIL addresses - MYSQL (or Sequalize?) is resolving username+onething@gmail.com and username+anotherthing@gmail.com and NOT UNIQUE. Which makes sense on one hand, because we know these emails will land in the same inbox. But on the otherhand, the strings are obviously very unique.

Validating DOMAIN NAME at SENDGIRD when GODADDY is DNS - instructions are incorrect and time was spent untangling that
https://github.com/sendgrid/docs/issues/6530

# API Routes

| Method | Route            | Description                                                                                                                                                                                                                                                                   |
| :----- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/user/login  | Logs user in - expects JSON object formatted: <br>`{`<br>`"email": "`<em>`EMAIL`</em>`",`<br>`"password": "`<em>`PASSWORD`</em>`"`<br>`}`                                                                                                                                     |
| POST   | /api/user/logout | Logs user out - expects JSON object formatted: <br>`{`<br>`"email": "`<em>`EMAIL`</em>`"`<br>`}`                                                                                                                                                                              |
| POST   | /api/email       | Sends email out - expects JSON object formatted: <br>`{`<br>`"emailTo": "`<em>`EMAIL RECIPIENT`</em>`",`<br>`"emailSubject": "`<em>`EMAIL SUBJECT`</em>`",`<br>`"emailBody": `<em>`"EMAIL BODY`</em>`"`<br>`}`                                                                |
| POST   | /api/users       | Creates a user - expects JSON object formatted: <br>`{`<br>`"first_name": "`<em>`FIRST NAME`</em>`",`<br>`"last_name": "`<em>`LAST NAME`</em>`",`<br>`"zipcode": "`<em>`ZIPCODE`</em>`",`<br>`"email": "`<em>`EMAIL`</em>`",`<br>`"password": "`<em>`PASSWORD`</em>`"`<br>`}` |
| POST   | /api/vaxxs       | Adds a vaxx to a user - expects JSON object formatted: <br>`{`<br>`"vaxx_name": "`<em>`VAXX NAME`</em>`",`<br>`"description": "`<em>`DESCRIPTION`</em>`",`<br>`"date_created": "`<em>`DATE`</em>`",`<br>`"user_id": "`<em>`user_id`</em>`"`<br>`}`                            |
| PUT    | /api/vaxxs/:id   | Updated a vaxx given a vaxx id - expects JSON object formatted: <br>`{`<br>`"vaxx_name": "`<em>`VAXX NAME`</em>`",`<br>`"description": "`<em>`DESCRIPTION`</em>`",`<br>`"date_created": "`<em>`DATE`</em>`"`<br>`}`                                                           |
