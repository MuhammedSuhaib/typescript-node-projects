#! /usr/bin/env node
// The line above is called a "shebang": "she" stands for sharp (#) and "bang" represents the exclamation mark (!)

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform the operation",
    type: "list",
    name: "Operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
    ],
  },
]);

// Conditional statement
if (answer.Operator === "Addition") {
  console.log(`Your value is`, answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(`Your value is`, answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(`Your value is`, answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(`Your value is`, answer.firstNumber / answer.secondNumber);
} else if (answer.Operator === "Modulus") {
  console.log(`Your value is`, answer.firstNumber % answer.secondNumber);
} else {
  console.log("Please choose a valid operator");
}