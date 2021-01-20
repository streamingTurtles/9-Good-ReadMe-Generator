// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
var badge = 'not assigned - empty';  // for testing purposes to track before user selecting a license to apply
function renderLicenseBadge(data) {
//  console.log("I am inside renderLicenseBadge() function "); // tesing 
//  console.log(`${data.licenseType}`);  // testing code, show what License # user selected at prompt
//  list of markdown license badges from Shields.io:
//  https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500  
  switch(`${data.licenseType}`){
    case "1": // for MIT License     
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;
    case "2": // for BSD 2-Clause License     
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;
    case "3": // for Apache 2.0 License    
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;
    case "4": // for Creative Commons License CC BY 4.0    
      badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;      
    case "5": // for GNU GPL v3 License     
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;
    case "6": // for IBM Public License Version 1.0
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break;
    case "7": // for Mozilla Public License 2.0     
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      // console.log("I got in the switch case,  badge is: ", badge); // testing code
      break; 
    case "" :
      badge = "NO LICENSE HAS BEEN SELECTED"  
      // console.log("I got in the switch case,  badge is: ", badge); // testing code, for the empty case condition
      break;          
  }
  // console.log("badge is: ", badge);  // testing code
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// **** THIS IS HANDLED IN THE FUNCTION "renderLicenseBadge()" In The LAST CASE CONDITION - I RETURN THE EMPTY STRING that PRINTS IN THE README - NO LICENSE HAS BEEN SELECTED 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// **** THIS IS HANDLED IN THE THE FUNCTION "renderLicenseBadge()", In the CASE Conditions - EACH BADGE CONTAINS A LINK TO THE LICENCE ***




// TODO: Create a function to generate markdown for README
function generateMarkdown(data, githubInputs) {
  renderLicenseBadge(data); // function call to add the user selected the license badge 
  console.log('');// need to get back into this generateMarkdown() function after calling renderLicenseBadge() - the console.log() will force the rest of the code in this function to run, i.e. - `backtick` stuff in the return
  return `
  # Project Title: ${data.title}
    
  ## Table of Contents:
  - [Project Description](#Project-Description:)
  - [Installation Instructions](#Installation-Instructions:)
  - [Project Usage Information](#Project-Usage-Information:)
  - [Contribution Guidelines](#Contribution-Guidelines:)
  - [Testing Instructions](#Testing-Instructions:)
  - [License Type](#License-Type:)
  - [gitHub Repo Link](#gitHub-Repo-Link:)
  - [gitHub Live Web Link](#gitHub-Live-Web-Link:)
  - [gitHub Informaton](#gitHub-Information:)
  - [my eMail](#my-eMail-for-Questions-&-Information:)

  &nbsp;
  - - -
  ## Project Description:
  - ${data.description}

  &nbsp;
  - - -
  ## Installation Instructions:
  - ${data.installationInstructions}

  &nbsp;
  - - -
  ## Project Usage Information:
  - ${data.usageInformation}

  &nbsp;
  - - -
  ## Contribution Guidelines:
  - ${data.contributionGuidelines}

  &nbsp;
  - - -
  ## Testing Instructions:
  - ${data.testInstructions}

  &nbsp;
  - - -
  ## License Type:
  - ${badge}

  &nbsp;
  - - -
  ## gitHub Repo Link:
  - ${data.repoLink}

  &nbsp;
  - - -
  ## gitHub Live Web Link:
  - ${data.liveLink}

  &nbsp;
  - - -
  ## gitHub Information:

  ![Streaming Turtles, LLC](https://avatars2.githubusercontent.com/u/1152009?v=4)
- user name: ${data.userName}
- [GitHub Profile](https://github.com/streamingTurtles)

  ## my eMail for Questions & Information:
  - ${data.eMail}  

  &nbsp;
- - -
- - -
Peter Cardillo, Columbia Engineering Fullstack Bootcamp, 2020-2021  
`;
}

module.exports = generateMarkdown;


