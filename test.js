/*!
 * helper-example <https://github.com/jonschlinkert/helper-example>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var handlebars = require('handlebars');
var verb = require('verb');
var helper = require('./');


describe('require helper', function () {
  it('should work as a template helper with verb (or any template engine):', function () {
    var str = 'AAA {%= require("get-value")({a: {b: {c: "ZZZ"}}}, "a.b.c") %}';
    verb.helper('require', helper);
    verb.render(str, function (err, content) {
      content.should.equal('AAA ZZZ');
    });
  });

  it('should work as a handlebars helper:', function () {
    var str = '{{require "get-value" this "a.b.c"}}';
    handlebars.registerHelper('require', helper);
    handlebars.compile(str)({a: {b: {c: 'ZZZ'}}}).should.equal('ZZZ');
  });
});
