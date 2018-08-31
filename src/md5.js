const isBrowser = require('./isBrowser');

if (isBrowser()) {
    module.exports = require('blueimp-md5');
}
else {
    const _require = require;
    const crypto = _require('crypto');

    module.exports = function (str) {
        return crypto.createHash('md5').update(str).digest('hex');
    };
}