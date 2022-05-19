import './style.css';

import { fetchWeatherInfo, output, fetchWeatherInfoWithCoord } from './modules/weatherApiFunctions';
import { renderWeatherInformation, renderWeatherDetails } from './modules/DOMrendering';


const inputName = document.getElementById('search-weather-input');
const searchBtn = document.getElementById('search');





searchBtn.addEventListener('click', async () => {
  const cityName = inputName.value;
  await fetchWeatherInfo(cityName);
  renderWeatherInformation(output, 'default')
  renderWeatherDetails(output)
  await fetchWeatherInfoWithCoord(output.lat, output.lon)
})




