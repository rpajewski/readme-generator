// table of contents generated
const tableOfContents = filterData => {
    // destructure data
    const { installation, projectUse, projectCredits, badges, projectFeatures, projectContributors, projectTests } = filterData;
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
    tableOfContentsArr.push('* [License](#license)');
    if (badges) {
        tableOfContentsArr.push('* [Badges](#badges)');
    }
    if (projectFeatures) {
        tableOfContentsArr.push('* [Features](#features)');
    }
    if (projectContributors) {
        tableOfContentsArr.push('* [Contributing](#contributing)')
    }
    if (projectTests) {
        tableOfContentsArr.push('* [Tests](#tests)')
    }
    return tableOfContentsArr.join('\n')
}

// display installation instruction
const installationInput = data => {
    if (data.installation) {
        return `## Installation
${data.installation}
`
    } else {
        return '';
    }
}

// display usage
const usageInput = data => {
    if (data.projectUse) {
        return `## Usage
${data.projectUse}
`
    } else {
        return '';
    }
}

// display any credits
const creditsInput = data => {
    if (data.projectCredits) {
        return `## Credits
${data.projectCredits}
`
    } else {
        return '';
    }
}

// display any additional features
const featuresInput = data => {
    if (data.projectFeatures) {
        return `## Features
${data.projectFeatures}
`
    } else {
        return '';
    }
}

// display any contributor instructions
const contributorInput = data => {
    if (data.projectContributors) {
        return `## Contributing
${data.projectContributors}
`
    } else {
        return '';
    }
}

// display any test results
const testInput = data => {
    if (data.projectTests) {
        return `## Tests
${data.projectTests}`
    } else {
        return '';
    }
}

// badge for license displayed near project title
const licenseBadgeInput = data => {
    if (data.license) {
        // parse input
        const licenseBadgeArr = data.license.map(v => v.toLowerCase());
        // temp array to hold badges
        const licenseBadgeInputArr = [];

        licenseBadgeArr.forEach(function(license) {
            if (license === 'mit') {
                licenseBadgeInputArr.push(`![mit](https://img.shields.io/badge/license-MIT-green)`);
            }
            if (license === 'isc') {
                licenseBadgeInputArr.push(`![isc](https://img.shields.io/badge/license-ISC-green)`);
            }
            if (license === 'apache') {
                licenseBadgeInputArr.push(`![apache](https://img.shields.io/badge/license-Apache-green)`);
            }
        })
        return licenseBadgeInputArr
    }
}

// license notice added to page based on user choice
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
                licenseInputArr.push(`Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`);
            }
            if (license === 'isc') {
                licenseInputArr.push(`Copyright

Permission to use, copy, modify, and/or distribute this software for any purpose 
with or without fee is hereby granted, provided that the above copyright notice 
and this permission notice appear in all copies.
                
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY 
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS 
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER 
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE 
OF THIS SOFTWARE.`);
            }
            if (license === 'apache') {
                licenseInputArr.push(`Copyright

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
                
    http://www.apache.org/licenses/LICENSE-2.0
                
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`);
            }
        })
        licenseInputArr.push('\n')
        return licenseInputArr
    }
}

// display badges based on code base used in project
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

// generate markdown
module.exports = markdownPage => {
    // destructure user input for each section
    const { projectTitle, projectDescription, github, email, licenses, ...rest } = markdownPage;

    return `# ${projectTitle}   ${licenseBadgeInput(rest)}

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