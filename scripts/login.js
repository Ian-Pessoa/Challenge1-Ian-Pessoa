let inputs = document.querySelectorAll('.input-box input');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentNode.querySelector('label').classList.add('active');
  });

  input.addEventListener('blur', () => {
    if(input.value === '') {
      input.parentNode.querySelector('label').classList.remove('active');
    }
  });
});

let storedUser = JSON.parse(localStorage.getItem('user'));

if(storedUser) {
  loginForm = document.querySelector('.loginForm');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email === storedUser.email && password === storedUser.password) {
      alert('Login successful!');
      window.location.href = 'home.html';
    } else {
      alert('Incorrect email or password');
    }
  })
} else {
  alert('No user data found. Please register first.');
}