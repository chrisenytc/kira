/*
 * kira
 * https://github.com/chrisenytc/kira
 *
 * Copyright (c) 2014, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Module Dependencies
 */

require('colors');


module.exports = function(msg, type) {
    switch (type) {
        case 'error':
            console.log();
            console.log(msg.bold.red);
            break;
        case 'warning':
            console.log();
            console.log(msg.bold.yellow);
            break;
        case 'info':
            console.log();
            console.log(msg.bold.cyan);
            break;
        case 'success':
            console.log();
            console.log(msg.bold.green);
            break;
        default:
            console.log();
            console.log(msg.bold);
            break;
    }
};
