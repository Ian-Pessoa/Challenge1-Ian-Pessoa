let registrationForm = document.querySelector('.registrationForm');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstName = document.getElementById('firstname').value;
  let lastName = document.getElementById('lastname').value;
  let birthDate = document.getElementById('birth').value;
  let country = document.getElementById('country').value;
  let city = document.getElementById('city').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  let generalRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

  if(!generalRegex.test(firstName)) {
    alert('Please enter a valid first name');
    return;
  }

  if(!generalRegex.test(lastName)) {
    alert('Please enter a valid last name');
    return;
  }

  if(!generalRegex.test(country)) {
    alert('Please enter a valid country name');
    return;
  }

  if(!generalRegex.test(city)) {
    alert('Please enter a valid city name');
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  let birthDateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-2][0-4])$/;
  if(!birthDateRegex.test(birthDate)) {
    alert('Please enter a valid date');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    country: country,
    city: city,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };

  localStorage.setItem('user', JSON.stringify(newUser));

  alert('registration successful!');
  window.location.href = 'login.html';
})