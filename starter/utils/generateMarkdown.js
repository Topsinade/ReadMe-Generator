// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Description
  ${data.description}

  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, reach out to me at ${data.email}. You can also check out my Github Profile: [${data.github}](http:github.com/${data.github})

`;
}

module.exports = generateMarkdown;

