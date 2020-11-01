const tableOfContents = filterData => {
    // destructure data
    const { installation, projectUse, projectCredits, badges } = filterData;
    // temp array to hold table of contents info
    const tableOfContentsArr = [];

    if (installation) {
        tableOfContentsArr.push('* [Installation](#installation)');
    }
    if (projectUse) {
        tableOfContentsArr.push('* [Usage](#usage)');
    }
    if (projectCredits) {
        tableOfContentsArr.push('* [Credits](#credits)');
    }
    tableOfContentsArr.push('* [License](#license)')
    if (badges) {
        tableOfContentsArr.push('* [Badges](#badges)')
    }
    return tableOfContentsArr.join('\n')
}

const installationInput = data => {
    if (data.installation) {
        return `## Installation
${data.installation}
`
    } else {
        return '';
    }
}

const usageInput = data => {
    if (data.projectUse) {
        return `## Usage
${data.projectUse}
`
    } else {
        return '';
    }
}

const creditsInput = data => {
    if (data.projectCredits) {
        return `## Credits
${data.projectCredits}
`
    } else {
        return '';
    }
}

const featuresInput = data => {
    if (data.projectFeatures) {
        return `## Features
${data.projectFeatures}
`
    } else {
        return '';
    }
}

const contributorInput = data => {
    if (data.projectContributors) {
        return `## Contributing
${data.projectContributors}
`
    } else {
        return '';
    }
}

const testInput = data => {
    if (data.projectTests) {
        return `## Tests
${data.projectTests}`
    } else {
        return '';
    }
}

const licenseInput = data => {
    if (data.license) {
        // parse input
        const licenseArr = data.license.map(v => v.toLowerCase());
        // temp array to hold badges
        const licenseInputArr = [];

        licenseInputArr.push(`## License
`)
        licenseArr.forEach(function(license) {
            if (license === 'mit') {
                licenseInputArr.push(`![mit](https://img.shields.io/badge/license-MIT-green)`);
            }
            if (license === 'isc') {
                licenseInputArr.push(`![isc](https://img.shields.io/badge/license-ISC-green)`);
            }
            if (license === 'apache') {
                licenseInputArr.push(`![apache](https://img.shields.io/badge/license-Apache-green)`);
            }
        })
        licenseInputArr.push('\n')
        return licenseInputArr.join('\n')
    }
}

const badgesInput = data => {
    if (data.badges) {
        // parse input
        const badgeArr = data.badges.map(v => v.toLowerCase());
        // temp array to hold badges
        const badgeInputArr = [];

        badgeInputArr.push(`## Badges
`)
        badgeArr.forEach(function(badge) {
            if (badge === 'javascript') {
                badgeInputArr.push(`![javascript](https://img.shields.io/badge/javascript-%20%20-blue)`);
            }
            if (badge === 'html') {
                badgeInputArr.push(`![html](https://img.shields.io/badge/HTML-%20%20-blue)`);
            }
            if (badge === 'css') {
                badgeInputArr.push(`![css](https://img.shields.io/badge/CSS-%20%20-blue)`);
            }
            if (badge === 'es6') {
                badgeInputArr.push(`![es6](https://img.shields.io/badge/ES6-%20%20-blue)`);
            }
            if (badge === 'jquery') {
                badgeInputArr.push(`![jquery](https://img.shields.io/badge/jQuery-%20%20-blue)`);
            }
            if (badge === 'bootstrap') {
                badgeInputArr.push(`![bootstrap](https://img.shields.io/badge/Bootstrap-%20%20-blue)`);
            }
            if (badge === 'node') {
                badgeInputArr.push(`![node](https://img.shields.io/badge/Node-%20%20-blue)`);
            }
        })
        badgeInputArr.push('\n')
        return badgeInputArr.join('\n')
    }
}
  
module.exports = markdownPage => {
    // destructure user input for each section
    const { projectTitle, projectDescription, github, email, licenses, ...rest } = markdownPage;

    return `# ${projectTitle}

## Description
${projectDescription}

Contact Info:
GitHub: ${github}
Email: ${email}

## Table of Contents

${tableOfContents(rest)}
${installationInput(rest)}
${usageInput(rest)}
${creditsInput(rest)}
${licenseInput(rest)}
${badgesInput(rest)}
${featuresInput(rest)}
${contributorInput(rest)}
${testInput(rest)}`;
}