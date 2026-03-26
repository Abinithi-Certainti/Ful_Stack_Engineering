const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const api_key = "b9d87a580d72eddf06498b3713519fba";
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      });
    }

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    const response = await fetch(api_url);
    const data = await response.json();

    if (!data.name || Number(data.cod) !== 200) {
      return res.status(404).json({
        message: "City not found",
      });
    }

    await pool.query(
      `INSERT INTO weather_transactions (city_name, temperature, humidity, condition)
       VALUES ($1, $2, $3, $4)`,
      [
        data.name,
        data.main.temp,
        data.main.humidity,
        data.weather[0].description,
      ],
    );

    res.json({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
    });
  } catch (error) {
    console.error("Weather route error:", error);
    res.status(500).json({
      message: "Error fetching weather data",
    });
  }
});

module.exports = router;
