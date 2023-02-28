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
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installs',
        message: 'Is there anything to install for this repo to work?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give a description on how to use this repo',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project',
        choices: ['MIT', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Any contributors for this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you run for this project, if any?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
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
