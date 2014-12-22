var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function (res) {
  res.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }

    var dataString = data.toString();
    console.log(dataString.length);
    console.log(dataString);
  }));
});