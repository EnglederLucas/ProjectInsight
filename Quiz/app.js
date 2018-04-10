const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');

mongoose.connect('mongodb://localhost/questions');
let db = mongoose.connection;


db.once('open', function(){
  console.log('Connectet to MongoDB');
});

//Check for DB errors

db.on('error', function(err){
  console.log(err);
});

let Question = require('./models/question');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');  

app.get('/', function(req, res){
    Question.find({}, function(err, question){
        if(err){
          console.log(err);
        }
        else{
          res.render('x', {
            questions: question
          });
        }
    });
    console.log('HOME');
});

app.listen(3000, function(){
    console.log('Server connected to 3000');
});

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/cssSidebar', express.static(__dirname + '/cssSidebar'));
