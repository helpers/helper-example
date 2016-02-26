/*!
 * helper-example <https://github.com/jonschlinkert/helper-example>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Create a code example from the contents of the specified
 * JavaScript file.
 *
 * ```js
 * {%%= example("foo", {name: "my-module"}) %}
 * ```
 *
 * @param  {String} `fp` The path of the file to include.
 * @param  {Object} `context`. Pass `context.name` Replace `./` in `require('./')` with the given name.
 * @return {String}
 * @api public
 */

module.exports = function example(str, name) {
  if (!str) return '';
  if (!name) return str;
  return str.replace(/\((['"])\.\/\1\)/g, '(\'' + name + '\')');
};
