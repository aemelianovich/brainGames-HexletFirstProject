#!/usr/bin/env node

import * as cli from '../src/cli.js';

cli.showWelcomMsg();

const userName = cli.askUserName();
cli.showGreetingUser(userName);
