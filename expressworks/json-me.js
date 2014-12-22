var express = require('express');
var fs = require('fs');
var app = express();


app.get('/books', function(req, res){
  var file = process.argv[3];
  fs.readFile(file, function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});


app.listen(process.argv[2]);