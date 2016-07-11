const express = require('express');
const expressApp = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');

const lookaheadExample = require('./server-lookahead-example');

// allows us to receive requests using JSON or URL encoded data
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
	extended: true
}));

expressApp.get('/requestAnimalNames/:animalName', function (request, response) {
	const repsonseObject = {
		query: request.params.animalName,
		lookaheadMatches: lookaheadExample.lookahead(request.params.animalName)
	};
	
	console.log(repsonseObject);

	response.send(repsonseObject);
});

// serve static files
expressApp.use(express.static('examples/rxjs'));

// start server
expressApp.listen(3000);
console.log(chalk.cyan('Server started at localhost:3000'));