const express = require('express'),
	expressApp = express(),
	chalk = require('chalk'),
	bodyParser = require('body-parser');

// allows us to receive requests using JSON or URL encoded data
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
	extended: true
}));

expressApp.get('/requestAnimalNames/:animalName', function (request, response) {
	console.log(request.params);
	response.send({requestedName: request.params.animalName});
});

// serve static files
expressApp.use(express.static('examples/rxjs'));

// start server
expressApp.listen(3000);
console.log(chalk.cyan('Server started at localhost:3000'));