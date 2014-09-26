#!/usr/bin/env node

/*
 * kira
 * https://github.com/chrisenytc/kira
 *
 * Copyright (c) 2014, Christopher EnyTC
 * Licensed under the MIT license.
 */

/**
 * Module dependencies.
 */

var program = require('commander'),
    updateNotifier = require('update-notifier'),
    _ = require('underscore'),
    banner = require('../lib/banner.js'),
    Kira = require('..'),
    api = new Kira(),
    path = require('path'),
    debug = require('../lib/debugger.js'),
    pkg = require('../package.json');

require('colors');

/*
 * Kira Bootstrap
 */

program
    .version(pkg.version, '-v, --version')
    .usage('command [option]'.white);

/*
 * Options
 */

program
    .option('--json', 'Show pure JSON output');

program
    .option('--proxy <proxy>', 'Use proxy');

/*
 * Kira Signup
 */

program
    .command('kill <url>')
    .description('Write a url in Death Note'.white)
    .action(function(url) {
        var prompts = [{
            type: 'input',
            name: 'maxLimit',
            message: 'What is the maximum number of connections?',
            default: 200
        }, {
            type: 'input',
            name: 'length',
            message: 'What is the content-length?',
            default: 10000
        }, {
            type: 'confirm',
            name: 'continue',
            message: 'You confirm the kill order?'
        }];
        //Ask
        api.prompt(prompts, function(answers) {
            if (answers.continue) {
                api.kill(url, answers.maxLimit, answers.length, program.proxy);
            } else {
                process.exit(0);
            }
        });
    });

/*
 * Kira on help ption show examples
 */

program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    $ kira kill');
    console.log('');
});

/*
 * Kira Banner
 */

banner();

/*
 * Kira Process Parser
 */

program.parse(process.argv);

/*
 * Kira Default Action
 */

var notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version
});

if (notifier.update) {
    notifier.notify(true);
}

if (process.argv.length == 2) {
    program.help();
}
