import './style.css';
import { fetchWeatherInfo, output } from './modules/weatherApiFunctions';


const inputName = document.getElementById('search-weather-input');
const searchBtn = document.getElementById('search');
const weatherDescription = document.querySelector('.weather-info_description')

searchBtn.addEventListener('click', async () => {
  const cityName = inputName.value;
  await fetchWeatherInfo(cityName);
  
  weatherDescription.textContent = output.description
})




