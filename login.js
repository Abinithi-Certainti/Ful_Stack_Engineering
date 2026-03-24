const readline = require(`readline`);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const users = {
  username: "Abinithi",
  password: "12345",
};
function login(username, password) {
  if (username === users.username && password === users.password) {
    console.log("login Approved");
  } else {
    console.log("Login failed");
  }
}
rl.question("Enter username:", (username) => {
  rl.question("Enter Password:", (passowrd) => {
    login(username, password);
    rl.close();
  });
});
