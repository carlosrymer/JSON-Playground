/*
 * Basic node app to display json output
 * @lastupdated 10.12.2013 crymer
 */

// Load Express
var express  = require('express'),
    app      = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

/**
 * Sends back the json file needed
 * @param object req The request header object
 * @param object res The response object
 */
displayJson = function(req, res)
{
	res.json(req.body.json);
}

app.post('/json', displayJson);

// Set the app to listen to an open port
app.listen(3000);

console.log('Server running...');
