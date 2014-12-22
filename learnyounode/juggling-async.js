var http = require('http');
var bl = require('bl');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var total = urls.length;
var counter = 0;
var results = [];

function finish() {
  for (var i = 0; i<total; i++) {
    console.log(results[i]);
  }
}

function makeRequest(i) {
  http.get(urls[i], function (res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }

      data = data.toString();
      results[i] = data;
      counter++;

      if (counter === total) {
        finish();
      }
    }));
  });
}

// important to loop through the array and make the request as a function
for(var i = 0; i < total; i++) {
  makeRequest(i);
}
