const addNewVaxxHandler = async (event) => {
  event.preventDefault();
  console.log('hit');
  const vaxx_name = 'dummy';
  const description = document
    .querySelector('#inputGroupSelect02')
    .value.trim();
  const date_created = document.querySelector('#add-vax-date').value.trim();
  console.log(vaxx_name, description, date_created);
  if (vaxx_name && description && date_created) {
    const response = await fetch(`/api/vaxxs`, {
      method: 'POST',
      body: JSON.stringify({ vaxx_name, description, date_created }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add vaxx to this user');
    }
  }
};

document
  .querySelector('#add_vaxx_form')
  .addEventListener('submit', addNewVaxxHandler);
