const net = require('net');
const { PORT, IP } = require('./constants');
// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: IP,
		port: PORT,
	});
	conn.on('connect', data => {
		console.log('server says: ', data);
		conn.write('Name: BMD');
		setTimeout(() => {
			conn.write('Move: up');
		}, 50);
	});

	// interpret incoming data as text
	conn.setEncoding('utf8');

	return conn;
};
console.log('Connecting ...');
connect();

module.exports = { connect };
