// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of contents
  
  - [Installations](#installations)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

  ## Installations
  
  ${data.installs}
  
  ## Usage 

  ${data.usage}

  ## Contributors
  
  ${data.contributors}

  ## Tests 

  ${data.tests}
  
  ## Questions 

  If you have any questions please contact me at ${data.email} or if check me out on GitHub at ${data.github}

  ## License

  ${data.license} 

`;
}



module.exports = generateMarkdown;
