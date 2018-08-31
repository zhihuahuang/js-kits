"use strict";

/**
 * isRegExp
 *
 * @since 0.1.0
 * @param regexp
 * @returns {boolean}
 */
function isRegExp(regexp) {
  return regexp instanceof RegExp;
}

module.exports = isRegExp;