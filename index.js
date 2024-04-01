#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 5:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! You are winner");
}
else {
    console.log("You lose");
}
