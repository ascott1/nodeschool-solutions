var express = require('express');
var stylus = require('stylus');
var app = express();

// use process.argv[3] for this workshop
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(__dirname + '/public'));

app.listen(process.argv[2]);