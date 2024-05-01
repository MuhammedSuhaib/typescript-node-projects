#!/usr/bin/env node
import inquirer from "inquirer";

// computer will generate a random number
// take user's input
// compare them both and show result

const randomNumber = Math.floor(Math.random() * 6 + 1 );
// console.log(randomNumber);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "\t Please Guess a number between 1 to 6 :\t \n ",
  },
]);
// console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guessed the right number.");
} else {
  console.log("you guessed the wrong number");
}