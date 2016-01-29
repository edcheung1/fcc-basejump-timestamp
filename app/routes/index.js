'use strict'

module.exports = function(app) {
	app.route('/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});
	app.route('/*')
		.get(function (req, res) {
			var isNum = /^\d+$/;
			var unixOut;
			
			var apiPath = decodeURI(req.path.substring(1));
			
			if(isNum.test(apiPath)) {
				var parseDate = new Date(apiPath*1000);
				unixOut = apiPath;
			} else if (!isNaN(Date.parse(apiPath))) {
				var parseDate = new Date(apiPath);
				unixOut = Date.parse(apiPath)/1000;
			} else {
				res.json({unix: null, natural: null});
				return;
			}
			
			var year = parseDate.getFullYear();
			var month = natMonth[parseDate.getMonth()];
			var date = parseDate.getDate();
			var natDate = month +' '+ date +', '+ year;
			
			res.json({unix: unixOut, natural: natDate});
		});
};

var natMonth = {
	'0': 'January',
	'1': 'Feburary',
	'2': 'March',
	'3': 'April',
	'4': 'May',
	'5': 'June',
	'6': 'July',
	'7': 'August',
	'8': 'September',
	'9': 'October',
	'10': 'November',
	'11': 'December'
};