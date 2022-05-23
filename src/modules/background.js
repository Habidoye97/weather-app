
function weatherAppBackground(data) {
  const weatherDescription = data.trim().toLowerCase().split(' ')
  if (weatherDescription.includes('rain') || weatherDescription.includes('shower')) {
    document.body.classList = 'rain-bg';
  } else if (weatherDescription.includes('clouds')) {
    document.body.classList = 'cloud-bg';
  } else if (weatherDescription.includes('clear')) {
    document.body.classList = 'clear-bg';
  } else if (weatherDescription.includes('snow') || weatherDescription.includes('ice')) {
    document.body.classList = 'snow-bg';
  } else if (weatherDescription.includes('storm')) {
    document.body.classList = 'thunderstorm-bg';
  } else if (weatherDescription.includes('sun')) {
    document.body.classList = 'sun-bg';
  }else if (weatherDescription.includes('haze')) {
    document.body.classList = 'haze-bg'
  } else { document.body.classList = 'others-bg'; }
}

export default weatherAppBackground