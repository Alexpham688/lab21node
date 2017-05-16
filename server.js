var express = require('express');
var app = express();
var http = require('http');
var quoteArray = require('./random.js');



app.use(express.static(__dirname + '/public'));


app.get('/random',function (req,res){
  res.send(quoteArray.quote[Math.floor(Math.random() *
  quoteArray.quote.length)]);
});


app.get('/random-quote',function (req, res){
  res.send(quoteArray.quote);
});



var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
