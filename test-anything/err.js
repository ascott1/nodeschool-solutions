var test = require('tape');
var feedCat = require(process.argv[2]);

test('chocolate should throw an error', function (t) {
  t.plan(2);
  t.throws(function() {
    feedCat('chocolate');
  });
  t.equal(feedCat('broccoli'), 'yum');
});
