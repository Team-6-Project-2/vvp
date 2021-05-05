const email = require('../../utils/email');
const welcomeEmailHandler = async (emailToSend, vaxxID) => {
  if (emailToSend && vaxxID) {
    // Send email

    emailBody = 'welcome!';
    const mail = await email(emailToSend, 'Welcome to the VVP!', emailBody);
  } else {
    console.log('error - missing email address or vaxxID');
    return 'error - missing email address or vaxxID';
  }
};
