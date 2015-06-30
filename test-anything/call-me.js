var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
   t.plan(2);
   repeatCallback(2, function () {
     t.pass('callback called');
   });
 });
