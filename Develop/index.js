// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: 'Please enter the "TITLE" of your app:',
        name: "title"
    },
    {
        type: "input",
        message: 'Please give a "SHORT-DESCRIPTION" of your app:', 
        name: "description"
    },
    {
        type: "input",
        message: 'Please give "INSTALLATION-INSTRUCTIONS" for your app:',
        name: "installationInstructions"
    },
    {
        type: "input",
        message: 'Please provide "USAGE-INFORMATION" about your app:',
        name: "usageInformation"
    },
    {
        type: "input",
        message: 'Please provide "CONTRIBUTION-GUIDELINES" to this app:',
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: 'Please give "TEST-INSTRUCTIONS" for this app:',
        name: "testInstructions"        
    },
    {
        type: "input",
        message: 'Please select the "LICENSE-TYPE" for your app:',
        name: "licenceType"
    },
    {
        type: "input",
        message: 'Please enter your gitHub project, "repo-URL-link" for this app:',
        name: "repoLink" 
    },
    {
        type: "input",
        message: 'Please enter the gitHub.io URL to the "LIVE-LINK" to this app:',
        name: "liveLink" 
    },
    {
        type: "input",
        message: 'Please enter your "gitHub USER-NAME":',
        name: "userName"
    },
    {
        type: "input",
        message: 'Please enter your "eMail-address" for followup and questions:',
        name: "eMail" 
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();