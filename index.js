#!/usr/bin/env node
const randomNumber = 7;
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "random", type: "number", message: "Enter your Guess Number between 0 to 10" }
]);
if (answer.random === randomNumber) {
    console.log("Your Guess is Correct");
}
else {
    console.log("Your Guess is Incorrect");
}
