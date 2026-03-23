const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function gradingSystem() {
  rl.question("Enter the score: ", (input) => {
    if (input === "") {
      console.log("Score is empty");
      rl.close();
      return;
    }

    const score = Number(input);
    if (isNaN(score)) {
      console.log("Enter a valid Score");
      rl.close();
      return;
    }

    if (score > 100 || score < 0) {
      console.log("Invalid Score");
      rl.close();
      return;
    }
    let grade;
    if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    if (grade === "A" || grade === "B" || grade === "C") {
      console.log(`You are pass with grade ${grade}`);
    } else {
      console.log(`You are failed with grade ${grade}`);
    }
    rl.close();
  });
}
gradingSystem();
