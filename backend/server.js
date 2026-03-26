const weatherRoutes = require("./routes/weatherRoutes");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/weather", weatherRoutes);
app.get("/", (req, res) => {
  res.send("server is running");
});

const port = 3000;
app.listen(port, () => {
  console.log("server is running in the port 3000");
});
