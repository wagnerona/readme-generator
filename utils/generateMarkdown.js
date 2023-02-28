// function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadgeUrl;

  switch (data.license) {

    case 'MIT':
      licenseBadgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'GPL':
      licenseBadgeUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD':
      licenseBadgeUrl = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
      default:
      licenseBadgeUrl = 'No License selected';
      break;
  }


  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of contents
  
  - [Installations](#installations)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installations
  
  ${data.installs}
  
  ## Usage 

  ${data.usage}

  ## Contributors
  
  ${data.contributors}

  ## Tests 

  ${data.tests}
  
  ## Questions 

  If you have any questions please contact me at ${data.email} or if check me out on GitHub at https://github.com/${data.github}

  ## License 

  ${licenseBadgeUrl} 

`;
}



module.exports = generateMarkdown;
