const express = require("express");
const router = express.Router();
const api_key = "b9d87a580d72eddf06498b3713519fba";
router.get("/", async (req, res) => {
  const city = req.query.city;
  res.send(`the city is ${city}`);
});
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

module.exports = router;
