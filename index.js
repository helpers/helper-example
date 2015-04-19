/*!
 * helper-example <https://github.com/jonschlinkert/helper-example>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var util = require('util');
var path = require('path');
var pkg = require('load-pkg');

module.exports = function example(name, args, fp) {
  var result;
  if (fp && typeof fp === 'function') {
    result = fp.apply(fp, args);
  } else if (fp) {
    var fn = require(path.resolve(fp));
    result = fn.apply(fn, args);
  } else {
    if (!pkg.main) {
      throw new Error('example helper expects a file path or `main` in package.json');
    }
    fn = require(path.resolve(pkg.main));
    result = fn.apply(fn, args);
  }

  var str = util.inspect(args, null, 10);
  // var res = '';
  // res += name + '(' + str.trim() + ');';
  // res += '\n';
  // res += '//=> '+ result;

  var ctx = {name: name, output: result, args: str.trim() };
  var obj = {};
  obj[name] = ctx;
  this.app.cache.data.actual = obj;
  // console.log(this.app.views.partials)
  // return res;
};

function (fp, name) {
    var str = fs.readFileSync(fp, 'utf8').trim();
    return str.split('(\'./\')').join('(\'' + name + '\')');
  }
