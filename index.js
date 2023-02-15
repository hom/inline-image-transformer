const fs = require('fs');

module.exports = {
  process(sourceText, sourcePath, options) {
    const source = fs.readFileSync(sourcePath).toString('base64');
    return {
      code: `module.exports = ${JSON.stringify(source)}`,
    };
  },
};
