const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        err ? console.log(error) : console.log('Readme has successfully been generated!')
    })
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
        .then((Answers) => {
            console.log(Answers)
            writeToFile('./TESTS/README.md', generateMarkdown({ ...Answers }))
        }
        )
}

// function call to initialize program
init();
