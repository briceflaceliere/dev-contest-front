var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var contests = require('./contests-mock.js');

app.get('/contests', function (req, res) {
  res.send(contests);
});

app.listen(3001, function () {
  console.log('Test app listening on port 3001');
});