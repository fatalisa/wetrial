const glob = require('glob');

const getPrettierFiles = () => {
  let files = [];
  const tsFiles = glob.sync('src/**/*.ts*', { ignore: ['**/node_modules/**', 'lib/**','coverage'] });
  const tsxFiles = glob.sync('src/**/*.tsx*', { ignore: ['**/node_modules/**', , 'lib/**','coverage'] });
  const scriptFiles = glob.sync('scripts/**/*.js');
  const lessFiles = glob.sync('src/**/*.less*', { ignore: ['**/node_modules/**',, 'lib/**','coverage'] });
  files = files.concat(tsFiles);
  files = files.concat(tsxFiles);
  files = files.concat(scriptFiles);
  files = files.concat(lessFiles);
  if (!files.length) {
    return;
  }
  return files;
};

module.exports = getPrettierFiles;
