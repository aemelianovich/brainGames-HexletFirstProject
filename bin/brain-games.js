#!/usr/bin/env node

import cli from '../src/cli.js';
import utils from '../src/utils.js';

console.log('Welcome to the Brain Games');
console.log(`Hello${utils.addCommaPrefixForNonEmptyStr(cli.askUserName())}!`);
