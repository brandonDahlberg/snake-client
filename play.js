const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');
const { builtinModules } = require('module');

console.log('Connecting ...');

connect();
setupInput();
