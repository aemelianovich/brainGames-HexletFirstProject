#!/usr/bin/env node

import * as cli from '../src/cli.js';

cli.welcomeMsg();

let userName = cli.askUserName();
cli.greetingUser(userName);