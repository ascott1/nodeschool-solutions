// this is incomplete and only returns the json api for non unixtime
var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end('Not a GET request');
  }

  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var timeObj = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };

  res.end(JSON.stringify(timeObj));
});

server.listen(port);