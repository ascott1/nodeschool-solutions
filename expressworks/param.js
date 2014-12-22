var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function(req, res){
  res.end(crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
});


app.listen(process.argv[2]);