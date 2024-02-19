const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions =[
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'installation procedure:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contributing:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What commands should be run to run tests:',
      name: 'tests',
    }, 
    {
      type: 'list',
      message: 'What kind of License should the project have?',
      name: 'license',
      choices: ['MIT', 'Boost1.0', 'AGPL', 'none'],
    },
    {
    type: 'input',
     message: 'Please enter your Github Username:',
     name: 'github',
    }, 
    {
      type: 'input',
       message: 'Please enter your email:',
       name: 'email',
      }, 
  ];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("creating Readme file...");
    writeToFile("./README.md", generateMarkdown({...responses}));
  });

}

// function call to initialize program
init();

