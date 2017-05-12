var express = require('express');
var app = express();
var http = require('http');
var lyricArray = require('./random.js');

app.get('/random',function (req, res){
  res.send(lyricArray.lyric);
});





app.get('/random-lyrics',function (req,res){
  res.send(lyricArray.lyric[Math.floor(Math.random() *
  lyricArray.lyric.length)]);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
