# Viktoriias Vax Password Group Project #2 Team 6

## Project Overview

This app allows you to track your vaccine record, and share it anonymous with anyone (or any agency) that requires proof of vaccination. (Except for the part about how this is just an academic exercise)

# View Demo

To view demo click on this link: ([Heroku Demo Link](https://viktoriiasvaxxpassport.com/))

# Getting Started Locally

To get the Node server running locally:

- Clone this repo ([GIT](https://github.com/Team-6-Project-2/vvp))
- Install Nodejs on your Mac ([Download](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew))
- `npm install` to install all required dependencies
- load the .sql file locally and make sure the credentials match up.
- `node server.js` to start the node application.

# Code Overview

## Dependencies

- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework (for servers) for node.
- [handlebars](https://www.npmjs.com/package/handlebars) - andlebars provides the power necessary to let you build semantic templates effectively with no frustration
- [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more
- [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
- [express-session](https://www.npmjs.com/package/express-session) - session middleware for express
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from .env file
- [date-fns](https://www.npmjs.com/package/date-fns) - provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js
- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords
- [nodemailer](https://www.npmjs.com/package/nodemailer) - Send e-mails from Node.js

## Dev Dependencies

- [nodmon](https://www.npmjs.com/package/nodemon) - nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

## Application MVC Structure

- `server.js` - The entry point to our application for the customer user type.
- `/views` - Applications template files using handlebars.
- `/public` - All public facing assets are in this directory.
- `/models` - The application models for use with ORM.
- `/db` - Starter database files.
- `/controllers` - Most of the application's logic for requests and responses are done in this directory as well as routes
- `/config` - Database configuration.

## Tasks performed / practiced in this acedemic exercise

- purchase custom domain name
- setup office365 email with 1 vanity username (viktoriia)
- upgrade heroku instance to hobby instance so we can run certs against an app that's deployed to a custom domain name
- Enabled automated certification management [link](https://devcenter.heroku.com/articles/automated-certificate-management#view-your-certificate-status)

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

### Team Members

- Viktoriia Midor
- Stefan Podzinski
- Jason Jones
