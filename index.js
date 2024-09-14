// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the Title of your Repo?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of the Project!'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Please provide a Table of Contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this Project going to be used for?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this Project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Do you want a license?',
        choices: ["MIT", "APACHE 2.0", "none"]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Does this project include tests?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions regarding this project?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'please enter an email address where you can be contacted'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            console.error(err);
        } else {
            console.log('File created!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((data)=>{
    console.log('Please wait...')
    writeToFile('GeneratedReadMe.md', generateMarkdown({...data}))
})
}

// Function call to initialize app
init();
