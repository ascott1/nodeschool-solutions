var fs = require('fs');
var path = require('path');
var data = [];

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }

    list.forEach(function (file) {
      if (path.extname(file) === '.' + ext) {
        data.push(file);
      }
    });
    callback(null, data);
  });
};