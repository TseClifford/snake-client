const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: '50541', // PORT number here,
  });

  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: SNK`)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (output) => {
    console.log(output);
  });

  return conn;
};

module.exports = connect;