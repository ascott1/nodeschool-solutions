var http = require('http');
var fs = require('fs');
var through = require('through');

function write (buf) { this.queue(buf.toString().toUpperCase()); }

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(write)).pipe(process.stdout);
  }
  res.end();
});

server.listen(process.argv[2]);

