#!/usr/bin/env node

import * as cli from '../src/cli.js';
import runEvenGame from '../src/evenGame.js';

cli.welcomeMsg();
const userName = cli.askUserName();
cli.greetingUser(userName);

runEvenGame(3, userName);
