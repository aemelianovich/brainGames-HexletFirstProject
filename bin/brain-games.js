#!/usr/bin/env node

import * as cli from '../src/cli.js';

cli.welcomeMsg();

const userName = cli.askUserName();
cli.greetingUser(userName);
