// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "none"){
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/license/mit)";
  } else if (license === "APACHE 2.0") {
    return "[APACHE 2.0](https://opensource.org/license/apache-2-0)";
  } else if (license === "none"){
    return ""
  }
}
//returns the licenses wi the appropriate link

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    let licenseLink = renderLicenseLink(license);
    return `## License
    
  This Application uses${licenseLink} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = `${data.license}`;
  return `# ${data.title}
  ### Description
    # ${data.description}
  ### Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [Contributors](#contributors)
    [License](#license)
    [Tests](#tests)
    [Questions](#questions)
    [Installation](#Installation)
  #### Contents
  ${data.contents}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### Contributors
  ${data.contributors}
  ### License
  ${license}
  ### Tests
  ${data.tests}
  ### Questions
  #### If you have any questions, contact me @ ${data.email}!`
}
module.exports = generateMarkdown;
