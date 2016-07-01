const express = require('express'),
	expressApp = express(),
	chalk = require('chalk');

// serve static files
expressApp.use(express.static('examples/rxjs'));

// start server
expressApp.listen(3000);
console.log(chalk.cyan('Server started at localhost:3000'));