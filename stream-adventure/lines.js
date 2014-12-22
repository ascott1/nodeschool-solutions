var through = require('through');
var split = require('split');
var line = 1;

function write(buf) {
  if (line % 2 === 0) {
    this.queue(buf.toString().toUpperCase() + '\n');
  } else {
    this.queue(buf.toString().toLowerCase() + '\n');
  }
  line++;
}

process.stdin
  .pipe(split())
  .pipe(through(write))
  .pipe(process.stdout);