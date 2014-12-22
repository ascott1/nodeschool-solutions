var myModule = require('./filter-module.js');

myModule(process.argv[2], process.argv[3], callback);

function callback(err, data) {
  if (err) {
    throw err;
  }

  data.forEach(function (file) {
    console.log(file);
  });
}