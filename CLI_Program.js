const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cli_Program() {
  rl.question("Enter a number", (input) => {
    const num = Number(input);

    if (input === "") {
      console.log("Given Number is Empty");
      rl.close();
      return;
    }

    if (isNaN(num)) {
      console.log("Enter a valid number");
      rl.close();
      return;
    }

    if (num < 0) {
      console.log("The Number is Negative");
    } else if (num > 0) {
      console.log("The number is positive");
    } else {
      console.log("The number is Zero");
    }

    if (num % 2 === 0) {
      console.log("The Number is Even Number");
    } else {
      console.log("The number is Odd");
    }
    rl.close();
  });
}
cli_Program();
