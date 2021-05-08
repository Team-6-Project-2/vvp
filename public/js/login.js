const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert('Incorrect username or password');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const zipcode = document.querySelector('#zip-code').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && email && zipcode && password) {
    const response = await fetch('/api/users', {
      method: 'POST',

      body: JSON.stringify({ first_name, last_name, zipcode, email, password }),

      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const resData = await response.json(); // need to extract vvp_number

      const emailBody = `
      Welcome ${first_name} ${last_name} to Viktoriia's Vaccination Passport!

      Your Viktoriia Vaccination Passport (VVP) ID is ${resData.vvp_number}

      Your can share this link to anyone that needs to verify your Vaccination Status:

      https://www.viktoriiasvaxxpassport.com/passport/${resData.vvp_number}

      `;

      welcomeEmailHandler(email, emailBody);

      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
