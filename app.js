let now = new Date();

let currentDateTime = document.querySelector("#date-time");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

currentDateTime.innterHTML = `${day} ${month} ${date}, ${year}, ${hours}: ${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  let city = document.querySelector("#city-input");
  if (searchInput.value) {
    city.innerHTML = `${searchInput}`;
  } else {
    city.innerHTML = null;
  }
  alert("please enter city");
}
let input = document.querySelector("searchInput");
input.addEventListener("submit", search);

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
