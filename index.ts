#!/usr/bin/env node

import chalk from "chalk";
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'answer',
      message: 'For which framework do you want to generate a turbo application?',
      choices: [],
    },
  ])
  .then(whichFramework => {
    console.info('Answer:', whichFramework.answer);
  });