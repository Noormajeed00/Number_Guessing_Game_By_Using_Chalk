#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
function rainbowText(text) {
    const rainbowColours = [chalk.red, chalk.yellow, chalk.green, chalk.blue, chalk.magenta];
    let rainbowText = "";
    for (let i = 0; i < text.length; i++) {
        const colour = rainbowColours[i % rainbowColours.length];
        rainbowText += colour(text[i]);
    }
    return rainbowText;
}
console.log(rainbowText('Welcome To Number Guessing Game'));
const randomNumber = (Math.floor(Math.random() * 4 + 1));
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.blue("Please Guess a Number:"),
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow("Congratulations! You Win"));
}
else {
    console.log(chalk.red("You Guessed Wrong Number " + ",", "Your Right Answer is:" + chalk.yellow(`${randomNumber}`)));
}
;
