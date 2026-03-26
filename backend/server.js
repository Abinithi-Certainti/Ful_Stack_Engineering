const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection error", err);
  } else {
    console.log("DB connected:", res.rows[0]);
  }
});

app.use(cors());
app.use(express.json());

app.use("/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
