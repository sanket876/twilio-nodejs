var express = require('express'),
	bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/message', function( request, response) {
	console.log(request.body);
	var msgFrom =  request.From;
	var msgBody = request.Body;

	response.send(`
		<Response>
			<Message>
				Hello ${msgFrom},Sanket Gandhi Here. You said: ${msgBody}
			</Message>
		</Response>
	`);
});


app.listen(3000);

app.get('/', function(request, response) {
	response.send('<h1>Hey There! You are landing on website.</h1>');
});

console.log('nodejs server listening on port 3000');