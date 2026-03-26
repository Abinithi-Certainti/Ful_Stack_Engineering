const input = document.getElementById("cityName");
const button = document.getElementById("searchButton");
const result = document.getElementById("result");

const api_key = "b9d87a580d72eddf06498b3713519fba";

async function weather(city) {
  if (city === "") {
    result.innerHTML = "<h2>Weather Information</h2><p>Enter a city name</p>";
    return;
  }

  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  const response = await fetch(api_url);
  const data = await response.json();

  const cityName = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const condition = data.weather[0].description;

  result.innerHTML = `<b><h4>Weather Information:</h4></b>
    <p>City: ${cityName}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Condition: ${condition}</p> `;
}

button.addEventListener("click", function () {
  const city = input.value.trim();
  weather(city);
});
