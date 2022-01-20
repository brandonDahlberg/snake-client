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
		setTimeout(() => {
			conn.write('Move: up');
			setTimeout(() => {
				conn.write('Move: up');
				setTimeout(() => {
					conn.write('Move: up');
				}, 150);
			}, 100);
		}, 50);
	});

	// interpret incoming data as text
	conn.setEncoding('utf8');

	return conn;
};

const setupInput = function () {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();
	stdin.on('data', handleUserInput);
	return stdin;
};

const handleUserInput = function (key) {
	if (key === '\u0003') {
		process.exit();
	}
};

console.log('Connecting ...');

connect();
setupInput();
