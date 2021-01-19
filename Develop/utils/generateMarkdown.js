// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, githubInputs) {
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
  - ${data.licenseType}

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
