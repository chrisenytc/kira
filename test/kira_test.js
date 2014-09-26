/*
 * kira
 * https://github.com/chrisenytc/kira
 *
 * Copyright (c) 2014, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var Api = require('../lib/kira.js');
var api = new Api();

describe('kira module', function() {
    describe('#constructor()', function() {
        it('should be a function', function() {
            Api.should.be.a("function");
        });
    });
    describe('#instance()', function() {
        it('should be a object', function() {
            api.should.be.a("object");
        });
    });
});

