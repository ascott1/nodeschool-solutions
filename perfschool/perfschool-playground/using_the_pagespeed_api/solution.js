'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var psi = require('psi');
var localtunnel = require('localtunnel');
var port = process.env.PORT || 7777;

app.get('/', home);
app.get('/insights', insights);
app.listen(port, listening);

// tunnel created with http://localtunnel.me/
var tunnel = localtunnel(port, function(err, tunnel) {
  return tunnel.url;
});


function listening () {
  console.log('Listening on port', port);
}

function home (req, res) {
  var file = path.join(__dirname, 'index.html');
  var index = fs.readFileSync(file, 'utf8');
  res.send(index);
}

function insights (req, res) {
  var results;
  var resources = {};
  res.setHeader('Content-Type', 'application/json');

  // get psi scores
  psi(tunnel.url, function (err, data) {
    results = data.pageStats;
    resources = {
      'resources': {
        'css': results.numberCssResources,
        'js': results.numberJsResources,
        'hosts': results.numberHosts,
        'total': results.numberJsResources
      }
    };
    // send the response
    res.json(resources);
  });
}
