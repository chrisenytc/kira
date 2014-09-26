'use strict';

/**
 * Retrun a random int, used by `utils.uid()`
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.random = getRandomInt;

/**
 * Return a unique identifier with the given `len`.
 *
 *     utils.uid(10);
 *     // => "FDaS435D2z"
 *
 * @param {Number} len
 * @return {String}
 * @api private
 */
exports.uid = function(len) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length;

    for (var i = 0; i < len; ++i) {
        buf.push(chars[getRandomInt(0, charlen - 1)]);
    }

    return buf.join('');
};

/**
 * Return a uniqueToken identifier in database
 *
 *     utils.uniqueToken();
 *     // => "FDaS435D2z"
 *
 * @return {String}
 * @api private
 */
exports.uniqueToken = function() {
    //Generate
    var uid = exports.uid(16),
        uid2 = exports.uid(16),
        uid3 = exports.uid(16),
        uid4 = exports.uid(16),
        uid5 = exports.uid(16),
        uid6 = exports.uid(16),
        uid7 = exports.uid(16),
        uid8 = exports.uid(16),
        uid9 = exports.uid(16),
        uid10 = exports.uid(16),
        uid11 = exports.uid(16),
        uid12 = exports.uid(16),
        uid13 = exports.uid(16),
        uid14 = exports.uid(16),
        uid15 = exports.uid(16),
        uid16 = exports.uid(16),
        accessToken = uid16 + uid15 + uid14 + uid13 + uid12 + uid11 + uid10 + uid9 + uid8 + uid7 + uid6 + uid5 + uid4 + uid3 + uid2 + uid;
        return accessToken;
};
