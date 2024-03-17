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
  const loginForm = document.querySelector('.loginForm');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    if(email === storedUser.email && password === storedUser.password) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'home.html';
    } else {
      emailInput.classList.add('input-invalid');
      passwordInput.classList.add('input-invalid');
      const invalidLoginMessage = document.querySelector('.invalid-login-message')
      invalidLoginMessage.innerText = 'Wow, invalid username or password. Please, try again!';
      invalidLoginMessage.classList.add('active');
      document.getElementById('password').style.marginBottom = '1.75rem';
    }
  })
} else {
  alert('No user data found. Please register first.');
}