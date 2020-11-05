const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', () => { // Error Message for idling
    console.log("you ded cuz you idled *don't boot the snoot*");
  });
  conn.on('connect', () => { // says name on connect
    console.log("welcome to snek, may your day be snekful");
    conn.write("Name: MCH");
    //setInterval(() => conn.write("Move: up"), 50);
  });
  
  return conn;
};

module.exports = { connect };