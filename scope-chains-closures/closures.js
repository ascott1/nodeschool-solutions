function foo() {
  var bar;
  quux = 'GLOBAL'
  function zip() {
    var quux = 'scoped to zip()';
    bar = true;
  }

  return zip;
}
