#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter your first number",
    type: "number",
    name: "firstNumber",
  },
  { message: "Enter your second number",
  type: "number",
  name: "secondNumber"
},


  {
    message: "Select one of the Operator to Perform action",
    type: "list",
    name: "Operator",
    choices: [
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
    ],
  },
]);

// Now Condition Statement

if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select a valid operator");
}
