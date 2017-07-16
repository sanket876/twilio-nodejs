require('dotenv').config();

var accountSid 		= process.env.ACCOUNT_SID,
	accessToken    	= process.env.ACCESS_TOKEN,
	fromNumber     	= process.env.FROM_NUMBER,
	toNumber       	= process.env.TO_NUMBER;

var client = require('twilio')(accountSid, accessToken);

client.messages.create({
	to: toNumber,
	from: fromNumber,
	body: 'This is just sample message from twilio!!!'
}, function(err, message) {
	if(err) console.log(err); else console.log(message.sid);
});