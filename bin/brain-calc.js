#!/usr/bin/env node

import * as cli from '../src/cli.js';
import runGame from '../src/index.js';
import gameFunctions from '../src/games/brainCalcGame.js';

cli.welcomeMsg();
const userName = cli.askUserName();
cli.greetingUser(userName);

runGame(3, userName, gameFunctions);
