const net = require('net');

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: 'localhost',
		port: 3000,
	});
	conn.on('connect', data => {
		console.log('server says: ', data);
		conn.write('Name: BMD');
	});

	// interpret incoming data as text
	conn.setEncoding('utf8');

	return conn;
};

console.log('Connecting ...');

connect();