// import express from 'express';

import inquirer from 'inquirer';
import { PromptResult } from './interfaces';

// const app = express();
// const port = 3000;

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const startApp = async (): Promise <void> => {
  const validateInput = (text: string): boolean => {
    const number = parseInt(text, 10);
    return (number > 1 && number < 49 && !chosenNumbers.includes(number));
  };
  
  do {
    const result: PromptResult = await inquirer.prompt([{
        name: 'number',
        type: 'input',
        message: 'Podaj liczbę...'
    }]);

    if (validateInput(result.number)) {
        chosenNumbers.push(parseInt(result.number));
    }
    console.log(chosenNumbers);
  } while (chosenNumbers.length < 6);
  const randomNewNumber = (): number => {
    return Math.floor(Math.random()* (49-1) + 1);
  };

  const validateRandomNumber = (number: number): boolean => {
    return !randomNumbers.includes(number);
  };

  do {
      const number: number = randomNewNumber();
      if (validateRandomNumber(number)) {
          randomNumbers.push(number);
      }
  } while (randomNumbers.length < 6);

  let counter = 0;
  chosenNumbers.forEach((number) => {
    if(randomNumbers.includes(number)) {
     counter += 1;
    }
  });
  console.log(`Your score is ${counter}`);
};
startApp();
