#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner" ;
import chalkAnimation from 'chalk-animation';

 
(async () => {
    await showBanner('G u e s s   a   N u m b e r', '\t \t \t Between 1 to 6 \n','green' , 'blue');

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log('Psst... the cheat answer 🤫:', randomNumber);    
    const answer = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "number",
        message: chalkAnimation.rainbow("\t Please Guess a number between 1 to 6 :\t \n "),
      },
    ]);
    console.log(chalk.bgWhiteBright(chalk.black.bold('You Enter')), answer.userGuessedNumber);
    if (answer.userGuessedNumber === randomNumber) {
      console.log(chalk.rgb(242, 11, 151).bold.italic("Congratulations!🎉✨") ,chalk.rgb(242, 158, 200)('you guessed the right number.🎊'))
    } else {
      console.log(chalk.rgb(242, 0, 0).bold.italic("you guessed the wrong number")+'😢😢😢');
    }

})();

