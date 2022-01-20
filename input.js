let { connect } = require('./client');
const conn = connect();

const setupInput = function () {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();
	stdin.on('data', handleUserInput);
	return stdin;
};

const handleUserInput = function (key) {
	if (key === '\u0077') {
		process.on('data', data => {
			conn.write('Move: up');
		});
	} else if (key === '\u0073') {
		process.on('data', data => {
			conn.write('Move: down');
		});
	} else if (key === '\u0061') {
		process.on('data', data => {
			conn.write('Move: left');
		});
	} else if (key === '\u0064') {
		process.on('data', data => {
			conn.write('Move: right');
		});
	} else if (key === '\u0003') {
		process.exit();
	}
};

module.exports = { setupInput };
