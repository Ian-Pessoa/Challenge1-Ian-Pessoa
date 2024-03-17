const daysNames = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function updateClockAndDate() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let day = now.getDate().toString().padStart(2, '0');
  let month = now.getMonth()
  let year = now.getFullYear();

  document.querySelector('.time').textContent = hours + ':' + minutes;
  document.querySelector('.date').textContent = `${daysNames[now.getDay()]}, ${day} de ${monthNames[month]} de ${year}`;
}

setInterval(updateClockAndDate, 1000);

updateClockAndDate();