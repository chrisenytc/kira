/*
 * kira
 * https://github.com/chrisenytc/kira
 *
 * Copyright (c) 2014, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

exports.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.uid = function(len) {
    var buf = [],
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length;

    for (var i = 0; i < len; ++i) {
        buf.push(chars[exports.getRandomInt(0, charlen - 1)]);
    }

    return buf.join('');
};

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
