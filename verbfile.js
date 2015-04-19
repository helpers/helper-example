'use strict';

var path = require('path');
var verb = require('verb');

verb.helper('example', require('./'));

verb.helper('template', function (delims, name) {
  if (!Array.isArray(delims)) {
    name = delims; delims = ['<%=', '%>']
  }
  verb.partial.apply(verb, arguments);
  var name = arguments[0];
  var partial = verb.views.partials[name];
  partial.content = format(partial.content, delims);
  verb.views.partials[name] = partial;
});

verb.helper('results', function (name) {
  console.log(this.context.partials)
  // var template = this.app.views.partials[name];
  // var res = this.app.renderTemplate(template);
  console.log(verb.cache.data)
  console.log(verb.views.partials)
});

function format(str, delims) {
  str = str.split(delims[0]).join('{%=');
  str = str.split(delims[1]).join('%}');
  return str;
}

verb.helper('data', function () {
  verb.data.apply(verb, arguments);
});

verb.helper('format', function (str) {
  str = str.replace(/([{\[]) /g, '$1');
  str = str.replace(/ ([}\]])/g, '$1');
  return str.slice(1, str.length -1);
});

verb.task('readme', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('.'));
});

verb.task('default', ['readme']);
