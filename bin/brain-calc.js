#!/usr/bin/env node

import * as cli from '../src/cli.js';
import runGame from '../src/index.js';
import gameFunctions from '../src/games/brainCalcGame.js';

cli.showWelcomeMsg();
const userName = cli.askUserName();
cli.showGreetingUser(userName);

runGame(3, userName, gameFunctions);
