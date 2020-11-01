const inquirer = require('inquirer');
const writeFile = require('./utils/generate-md.js');
const generateMd = require('./utils/generate-markdown');

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
            console.log('Please enter your project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project.',
      },
      {
        type: 'input',
        name: 'projectUse',
        message: 'Provide examples for your projects uses. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please provide instructions or examples for use!');
            return false;
          }
        }
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
        type: 'input',
        name: 'licenses',
        message: 'Provide a license. (Required)',
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please provide a license!');
            return false;
          }
        }
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
        name: 'projectContributing',
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

project title 
description 
table of contents 
installation 
usage 
credits 
license 
badges 
features 
contributing 
tests 
