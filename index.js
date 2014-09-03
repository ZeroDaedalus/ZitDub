#!/usr/bin/env node

var program = require('commander');
var json = require('./package.json');

program
    .version(json.version)
    .parse(process.argv)
