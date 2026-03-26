const input = document.getElementById("cityName");
const button = document.getElementById("searchButton");
const result = document.getElementById("result");

async function weather(city) {
  if (city === "") {
    result.innerHTML = "<p>Enter a city name</p>";
    return;
  }

  try {
    const response = await fetch(`http://localhost:3001/weather?city=${city}`);

    const data = await response.json();

    if (!response.ok) {
      result.innerHTML = `<p>${data.message}</p>`;
      return;
    }

    result.innerHTML = `
      <h3>Weather Information</h3>
      <p>City: ${data.city}</p>
      <p>Temperature: ${data.temperature}°C</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Condition: ${data.condition}</p>
    `;
  } catch (error) {
    result.innerHTML = "<p>Error fetching data</p>";
  }
}

button.addEventListener("click", function () {
  const city = input.value.trim();
  weather(city);
});
