import express from "express";
const app = express();
app.use(express.json());
app.post("/register", (req: express.Request, res: express.Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  return res.status(200).json({
    message: "User data received successfully",
    data: {
      name,
      email,
    },
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
