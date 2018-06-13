const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const parser = require('body-parser')

//mongoose.connect('mongodb://localhost/questions');

//var uri = 'password1&';
//var res = encodeURIComponent(uri); 

//console.log(res);

//mongoose.connect('mongodb+srv://engllucas:' + res + '@insight-quhku.mongodb.net/test');




var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});




let db = mongoose.connection;


db.once('open', function(){
  console.log('Connectet to MongoDB');
});

//Check for DB errors

db.on('error', function(err){
  console.log(err);
});

let Question = require('./Quiz/models/question');

app.set('views', path.join(__dirname, 'Quiz/views'));
app.set('view engine', 'pug');  

let questionsObject = [
	{
		question:"Would you consider yourself a reader?",
		a:"No, I don't read at all",
		b:"Well, sometimes I read",
		c:"Yes, I read quite a lot",
		d:"I would rather read than take this quiz right now"
	},
	
	{
		question:"Do you watch a lot of TV-shows and movies?",
		a:"What's a TV?",
		b:"It's a waste of time",
		c:"Of course I do",
		d:"I have a TV in every room of my house!"
	},
	
	{
		question:"Are you athletic?",
    	a:"I'm a professional couch potato",
		b:"I should be working out right now",
		c:"Well, kinda",
		d:"I'm an absolute sportaholic"
	},
	{
		question:"Are you fond of music?",
		a:"I only listen to the radio",
		b:"Some casual listening",
		c:"Yeah, I actually play an instrument ",
		d:"I live off of music"
	},
	{
		question:"Do you think of yourself as extroverted?",
		a:"I'm like the definition of introverted",
		b:"I'm more of a timid person",
		c:"People say I talk alot",
		d:"I talk more to strangers than to my family"
	},
	{		
    	question:"What kind of relationship do share with your family?",
		a:"It's complicated",
		b:"I don't know, haven't talked to them in a while",
		c:"Fine.",
		d:"I practically live with my parents"
	},
	{
    	question:"What about friends?",
    	a:"Do you mean the TV show?",
    	b:"I got one or two close friends",
    	c:"#squadgoals",
    	d:"I know a guy for everything"
	},
	{
		question:"Is it important to you to keep up with your friends?",
		a:"Not really",
		b:"Some of them",
		c:"Mostly people I know from school or college",
		d:"Isn't that the whole point of this?"
	},
	{
		question:"Are you planning to create a blog?",
		a:"I don't see myself blogging",
		b:"Maybe, I don't know yet",
		c:"I'd like to try",
		d:"Absolutely"
	},
	{
		question:"Are you the type of person to take pictures of your food?",
		a:"I hate it when someone does this",
		b:"No, not yet",
		c:"Only on special occasions",
		d:"It's everyday bro"
	}
];

app.get('/',function(req,res){
	//res.sendFile('../Mainpage/index.html');
	res.sendFile(path.join(__dirname, 'Mainpage/index.html'));
});

app.get('/questions', function(req, res){
    res.render('index', {
		title: 'Questions'
	});
});

app.get('/social-media-info', function(req, res){
	res.sendFile(path.join(__dirname, 'SocialNetworks/socialmedia.html'));
});



var sum = 0;
var sumNums = function(x){
	switch(x)
	{
		case 'a':
			sum += 1;
			break;
		case 'b':
			sum += 100;
			break;
		case 'c':
			sum += 1000;
			break;
		case 'd':
			sum += 10000;
			break;
	}

	console.log(sum);
};


app.use(parser.urlencoded({ extended: false }));

app.post('/questions/:index', function(req, res){
	console.log("clicked" +  req.params.index);
	console.log(req.body);
	sumNums(req.body.answer);
});

app.get('/questions/result', function(req,res){
	console.log(sum);
	res.render('res', {
		res: sum
	});
});

app.get('/questions/:index', function(req, res){
	console.log("INDEX:" + req.params.index);
	
	if(req.params.index < 0 || req.params.index >= questionsObject.length)
	{
		return;
	}

	if(req.params.index == questionsObject.length - 1)
	{
		console.log(sum);
		res.render('lastquestion', {
			question: questionsObject[req.params.index],
		});
		return;
	}

	if(req.params.index == 0)
	{
		sum = 0;
	}

	res.render('quiz', {
	  question: questionsObject[req.params.index],
	  index: req.params.index
	});
	console.log(req.params.index);		
	console.log('HOME');
});

app.use(express.static(path.join(__dirname, '/SocialNetworks')));
app.use(express.static(path.join(__dirname, '/Mainpage')));
app.use('/js', express.static(__dirname + '/Quiz/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/Quiz/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/Quiz/node_modules/bootstrap/dist/css'));
app.use('/cssSidebar', express.static(__dirname + '/Quiz/cssSidebar'));

