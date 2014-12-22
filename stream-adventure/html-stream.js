var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();

var stream = tr.createStream('.loud');

function write(buf) {
  this.queue(buf.toString().toUpperCase());
}

stream.pipe(through(write)).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);