'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var helper = require('./');
var example = require('./');

function read(fp) {
  return fs.readFileSync(fp, 'utf8');
}

describe('example helper', function() {
  it('should expose a function', function() {
    assert.equal(typeof example, 'function');
  });

  it('should replace a relative path with the module name', function() {
    var fixture = read('example.js');
    var actual = example(fixture, 'helper-example');
    assert(/require\(['"]helper-example/.test(actual));
  });
});
