let isLoggedIn = localStorage.getItem('isLoggedIn');

if (isLoggedIn == 'false') {
    window.location.href = 'login.html';
} else {
  let logout = document.querySelector('.logout-button');

  logout.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
  });
}

