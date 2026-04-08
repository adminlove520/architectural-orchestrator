const path = require('path');

module.exports = {
  skillPath: path.join(__dirname, 'SKILL.md'),
  readmePath: path.join(__dirname, 'README.md'),
  changelogPath: path.join(__dirname, 'CHANGELOG.md'),
  orchestrateBin: path.join(__dirname, 'bin', 'orchestrate.js')
};
