import './style.css';

import { fetchWeatherInfo, output, fetchWeatherInfoWithCoord, getLocation } from './modules/weatherApiFunctions';
import { renderWeatherInformation, renderWeatherDetails } from './modules/DOMrendering';


const standardUnit = document.getElementById('standard');
const metricUnit = document.getElementById('metric');
const imperialUnit = document.getElementById('imperial')
const searchBtn = document.getElementById('search');

let unit = 'standard'
let initialCity = 'ibadan'
let changeUnit = false

async function getWeatherData(unit, initialLoad = false) {
  try {
    let cityName;
    
    if(initialLoad) {
      cityName = initialCity
    } else {
      cityName = getLocation()
    }

    if (!cityName) {
      return
    }

    let lastCity = cityName

    if(changeUnit) {
      cityName = lastCity;
    }

    await fetchWeatherInfo(cityName, unit)
    renderWeatherInformation(output, unit)
    renderWeatherDetails(output, unit)
    await fetchWeatherInfoWithCoord(output.lat, output.lon)
    
    changeUnit = false;

  } catch (error) {
    alert(error)
  }

  document.getElementById('search-weather-input').value = '';
}

function setActiveButton(option) {
  const unitOption = document.querySelectorAll('.change-unit');
  unitOption.forEach((button) => {
    if (option) {
      button.classList.remove('active-unit');
    }
  });

  option.classList.add('active-unit');
}

searchBtn.addEventListener('click', async () => {
  getWeatherData(unit)
})

standardUnit.addEventListener('click', () => {
  unit = 'standard'
  changeUnit = true
  getWeatherData(unit)
  setActiveButton(document.querySelector('#standard'));
});

metricUnit.addEventListener('click', () => {
  unit = 'metric';
  changeUnit = true
  getWeatherData(unit)
  setActiveButton(document.querySelector('#metric'));
})

imperialUnit.addEventListener('click', () => {
  unit = 'imperial';
  changeUnit = true
  getWeatherData(unit)
  setActiveButton(document.querySelector('#imperial'));
})

getWeatherData(unit, true)
setActiveButton(document.querySelector('#standard'));






