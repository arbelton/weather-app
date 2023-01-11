function showWeather(response) {
  let nowTemperature = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  nowTemperature.innerHTML = `${temperature}`;
}

function retrievePosition(position) {
  let apiKey = "da28dec246303dc9c379de471c72a5d6";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `(#city)`;
}

function getCurrentPosition() {
  navigator.geolocaiton.getCurrentPosition(retrievePosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
