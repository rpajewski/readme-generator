const tableOfContents = filterData => {
    // destructure data
    const { installation, projectUse, projectCredits } = filterData;
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
    return tableOfContentsArr.join('\n')
}

const installationInput = data => {
    if (data.installation) {
        return `## Installation
${data.installation}
`
    }
}

const usageInput = data => {
    if (data.projectUse) {
        return `## Usage
${data.projectUse}
`
    }
}

const creditsInput = data => {
    if (data.projectCredits) {
        return `## Credits
${data.projectCredits}`
    }
}

const featuresInput = data => {
    if (data.projectFeatures) {
        return `## Features
${data.projectFeatures}
`
    }
}

const contributorInput = data => {
    if (data.projectContributors) {
        return `## Contributing
${data.projectContributors}
`
    }
}

const testInput = data => {
    if (data.projectTests) {
        return `## Tests
${data.projectTests}`
    }
}
  
module.exports = markdownPage => {
    // destructure user input for each section
    const { projectTitle, projectDescription, licenses, badges, ...rest } = markdownPage;

    return `# ${projectTitle}

## Description
${projectDescription}

## Table of Contents

${tableOfContents(rest)}
* [License](#license)
* [Badges](#badges)
    
${installationInput(rest)}
${usageInput(rest)}
${creditsInput(rest)}

## License
${licenses}

## Badges
${badges}

${featuresInput(rest)}
${contributorInput(rest)}
${testInput(rest)}`;
}