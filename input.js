const { stdin } = require('process');

let connection;

const setupInput = function(conn) {
  connection = conn;
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
    } else if (key === 'w') {
      connection.write("Move: up");
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    } else if (key === 'c') {
      connection.write('Say: snekofSTEEL');
    } else if (key === 'f') {
      connection.write('Say: snekofEARTH');
    }
  });
};

module.exports = { setupInput };