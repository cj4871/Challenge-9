// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license=== ""){
    return ""
  } else {
    return ""
  }
}
//returns the licenses wi the appropriate link

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ###Description
    # ${data.description}
  ###Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Installation](#Installation)
  #### ${data.contents}
  ###Installation
  #### ${data.installation}
  ###Usage
  #### ${data.usage}
  ###Contributors
  #### ${data.contributors}
  ###License
    ${console.log(renderLicenseSection(data.license))}
    ${console.log(renderLicenseLink(data.license))}
    ${console.log(renderLicenseBadge(data.license))}
  #### ${data.license}
  ###Tests
  #### ${data.tests}
  ###Questions
  #### If you have any questions, contact me ${data.email}. My github profile is for my other work ${data.github}.`

module.exports = generateMarkdown;
