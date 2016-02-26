
var app = require('./');

function foo(a, b, c) {
  //=> do stuff with a, b, and c
  return app(a, b, c);
}
foo('one', 'two', 'three');
