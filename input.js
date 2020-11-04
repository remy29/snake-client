const { stdin } = require('process');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.data = handleUserInputs;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.data();
  return stdin;
};

const handleUserInputs = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

module.exports = { setupInput };