const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function multiplicationTable() {
  rl.question("Enter the multiplicastion table", (input) => {
    if (input === "") {
      console.log("Input is empty");
      rl.close();
      return;
    }
    const number = Number(input);
    if (isNaN(number)) {
      console.log("Enter a valid number");
      rl.close();
      return;
    }
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  });
}
multiplicationTable();
