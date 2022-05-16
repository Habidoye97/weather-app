import './style.css';

import { fetchWeatherInfo, output } from './modules/weatherApiFunctions';
import { renderWeatherInformation } from './modules/DOMrendering';


const inputName = document.getElementById('search-weather-input');
const searchBtn = document.getElementById('search');





searchBtn.addEventListener('click', async () => {
  const cityName = inputName.value;
  await fetchWeatherInfo(cityName);
  renderWeatherInformation(output)
})




