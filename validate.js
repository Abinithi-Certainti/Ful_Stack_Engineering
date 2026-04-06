const express = require("express");
const app = express();
app.use(express.json());

const users = [];

app.post("/validate", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "All field are required" });
  }
  if (password < 6) {
    return res
      .status(404)
      .json({ message: "Password length req more than 6 digit" });
  }
  const existingUser = users.find((users) => users.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "Users already exist" });
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
  };
  users.push(newUser);

  return res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      email: newUser.email,
      password: newUser.password,
    },
  });
});
const port = 3005;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
