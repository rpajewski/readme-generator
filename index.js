const inquirer = require('inquirer');
const writeFile = require('./utils/write-markdown.js');
const generateMarkdown = require('./utils/generate-markdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your projects title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Describe your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide a link to your GitHub account. (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub URL!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Share your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide details on installation (if any).',
      },
      {
        type: 'input',
        name: 'projectUse',
        message: 'Provide examples for your projects uses.',
      },
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to give credit to other collaborators?',
        default: true
      },
      {
        type: 'input',
        name: 'projectCredits',
        message: 'Please list your collaborators and their GitHub profiles.',
        when: ({ confirmCredits }) => {
          if (confirmCredits) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license do you want to use? (Check one)',
        choices: ['MIT', 'ISC', 'Apache']
      },
      {
        type: 'checkbox',
        name: 'badges',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Would you like to add any features?',
        default: true
      },
      {
        type: 'input',
        name: 'projectFeatures',
        message: 'Please list any additional features.',
        when: ({ confirmFeatures }) => {
          if (confirmFeatures) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add instructions on how to contribute?',
        default: true
      },
      {
        type: 'input',
        name: 'projectContributors',
        message: 'Please explain how other developers can contribute to your project.',
        when: ({ confirmContributing }) => {
          if (confirmContributing) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add any tests?',
        default: true
      },
      {
        type: 'input',
        name: 'projectTests',
        message: 'Please explain any tests you have created for your app and how to run them.',
        when: ({ confirmTests }) => {
          if (confirmTests) {
            return true;
          } else {
            return false;
          }
        }
      }
];

// function to initialize program
const init = readMeData => {
    return inquirer.prompt(questions)
    .then(readMeData => {
        return readMeData;
    })
};


// function call to initialize program
init()
    .then(readMeData => {
        console.log(readMeData);
        return generateMarkdown(readMeData);
    })
    .then(markdownPage => {
        return writeFile(markdownPage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });