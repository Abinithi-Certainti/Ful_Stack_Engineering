const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const api_key = "b9d87a580d72eddf06498b3713519fba";
async function weather(city) {
  if (city === "") {
    console.log("Enter a city name");
    return;
  }
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const response = await fetch(api_url);
  const data = await response.json();

  const cityName = data.name;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const condition = data.weather[0].description;

  console.log(`City: ${cityName}`);
  console.log(`Temperature: ${temperature}°C`);
  console.log(`Humidity: ${humidity}%`);
  console.log(`Condition: ${condition}`);
}

rl.question("Enter the City name:", (city) => {
  weather(city);
  rl.close();
});
