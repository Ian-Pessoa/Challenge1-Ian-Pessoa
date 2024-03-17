const apiKey = '52e5fe17bc12736dd5418ec5c99c6140';

const storedUser = JSON.parse(localStorage.getItem('user'));
const city = storedUser.city;

const cityElement = document.querySelector('.city');
const temperatureElement = document.querySelector('.temperature');

const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
}

const showWeatherData = async (city) => {
  try {
    const data = await getWeatherData(city);

    if (data.name && data.main.temp) {
      cityElement.innerText = data.name;
      temperatureElement.innerText = parseInt(data.main.temp) + 'º';
    } else {
      cityElement.innerText = 'Cidade não encontrada';
    }
  } catch (error) {
    console.error('Erro ao obter dados meteorológicos:', error);
    cityElement.innerText = 'Erro ao obter dados meteorológicos';
    temperatureElement.innerText = '';
  }
}

showWeatherData(city);