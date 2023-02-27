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
}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log(inquirerAnswers)
    })
    
}

// function call to initialize program
init();
