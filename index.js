// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
   
    {
        type: 'input',
        name: 'Title',
        message: 'what is the Title of your Repo?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please give a description of the Project!'
    },
    {
        type: 'input',
        name: 'Contents',
        message: 'Please provide a Table of Contents'
    },
    {
        type: 'input',
        name: 'Instalation',
        message: 'Please give installation instructions'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is this Project going to be used for?'
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed to this Project?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Do you want a license?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Does this project include tests?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Do you have any questions regarding this project?',
    },
    {
    type: 'input',
    name: 'Email',
    message: 'please enter an email address where you can be contacted'
    },
    {
    type: 'input',
    name: 'Please enter the link to your github profile'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err)
    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers)=>{
    console.log('Please wait...')
    writeToFile('readme.md', generateMarkdown({...answers}))
})
}

// Function call to initialize app
init();
