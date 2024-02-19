// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Description
  ${data.description}

  ## Table of Content
      *Installation


  ##Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ##License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.question}

`;
}

module.exports = generateMarkdown;

