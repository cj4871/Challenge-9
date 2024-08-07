// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        question:"what is your Github UserName?",
        name:"UserName"
    },
    {
        type: "input",
        question: "what is your"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err)
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
