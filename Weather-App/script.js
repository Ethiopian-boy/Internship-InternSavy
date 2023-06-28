function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value;
  const apiKey = '97c06b390f9b613fe3cd833996fb8f39';

  // Make an API request to fetch the weather information
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
      const weatherInfo = document.getElementById('weatherInfo');
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const country = data.sys.country;
      const lon = data.coord.lon;
      const lat = data.coord.lat;


      // Set background color based on temperature
      document.body.style.backgroundColor = getBackgroundColor(temperature);

      weatherInfo.innerHTML = `
        <h2>Weather in ${city}, ${country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Coordinates: ${lat}, ${lon}</p>
      `;
    })


    .catch(error => {
      console.log('Error:', error);
    });
}

function getBackgroundColor(temperature) {
  if (temperature < 300) {
    return 'blue'; // Cold temperature
  } else if (temperature >= 300 && temperature < 500) {
    return 'green'; // Moderate temperature
  } else {
    return 'red'; // Hot temperature
  }
}