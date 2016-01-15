'use strict';

var express = require('express'),
	routes = require('./app/routes/index.js');
var app = express();
var router = express.Router();

/* app.use(router); */

app.set('port', (process.env.PORT || 5000));

routes(app);

/* router.get('/', function(request, response) {
	response.sendfile(process.cwd() + '/index.html');
}); */
app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
});