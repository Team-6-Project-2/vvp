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
