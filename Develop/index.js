// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require('axios');
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
        message: 'Please select the "LICENSE-TYPE" for your app:\n enter 1: for MIT License\n enter 2: for BSD License\n enter 3: for Apache License\n enter 4: for Creative Commons License\n enter 5: for GNU License\n enter 6: for IBM License\n enter 7: for Mozilla License   ',
        name: "licenseType",
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
function writeToFile(fileName, data, githubInputs) {
    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    fs.writeFile(fileName, generateMarkdown(data, githubInputs), error => {
        // handle any issues while writing file if any, else notify successful file creation 
        if (error) {
            throw error;
        };    
        console.log("A NEW README.md FILE HAS BEEN GENERATED!"); 
        console.log("Testing adding the license badges and links");       
        console.log(`The information entered will be used in the README-testing_0.8.md file`);          
        console.log(`
        \n for a Title, you entered: ${data.title}  
        \n for a Description: ${data.description}
        \n for Installation Instructions, you entered: ${data.installationInstructions}
        \n for Usage Information, you entered: ${data.usageInformation}
        \n for Contribution Guidelines, you entered: ${data.contributionGuidelines}
        \n for Test Instructions, you entered: ${data.testInstructions}
        \n for License Type, you entered: ${data.licenseType}
        \n for the Repo Link, you entered: ${data.repoLink}
        \n for the liveLink, you entered: ${data.liveLink}
        \n for your userName, you entered: ${data.userName}
        \n for your eMail, you entered: ${data.eMail}
        `)    
        });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        // https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api
        const queryUrl = `https://api.github.com/users/${data.username}`;
        const licenseBadge = `${data.licenseType}`
        console.log(`you selected number ${data.licenseType}`)
        axios.get(queryUrl).then(userInputs => {            
            const githubInputs = {
                githubPic: userInputs.data.avatar_url,
                email: userInputs.data.email,
                profile: userInputs.data.html_url,
                name: userInputs.data.name,
                licensBadge: userInputs.data.licenseType               
            };                   
                writeToFile("README-testing_0.8.md", data, githubInputs);
        });
});



}

// Function call to initialize app
init();
