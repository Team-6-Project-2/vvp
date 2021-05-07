const welcomeEmailHandler = async (emailTo, emailBody) => {
  const emailSubject = 'Welcome to the Viktoriia Vaccination Data';

  console.log('emailTo ' + emailTo);
  console.log('emailSubject ' + emailSubject);
  console.log('emailBody' + emailBody);

  if (emailTo && emailBody) {
    // Send email
    console.log('calling the email to send *****************');

    const response = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify({ emailTo, emailSubject, emailBody }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // if (response.ok) {
    //   document.location.replace('/profile');
    // } else {
    //   alert('Failed to create project');
    // }

    // needs to use the API route and not this await email
    // const mail = await email(emailToSend, 'Welcome to the VVP!', emailBody);
  } else {
    console.log('error - missing email address or email Body');
    return 'error - missing email address or email Body';
  }
};
welcomeEmailHandler();
