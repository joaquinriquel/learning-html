const { dataStore } = require('./data_store');
const runServer = require('./web_server');

runServer(dataStore);
