var express  = require('express');
var app = express();

var jsonTest = {
  "hello": "World"
};

app.get('/test', function (req, res) {
  res.send(jsonTest);
});

app.listen(3001, function () {
  console.log('Test app listening on port 3001');
});