#!/usr/bin/env node

import * as cli from '../src/cli.js';
import runGame from '../src/index.js';
import gameFunctions from '../src/games/brainPrimeGame.js';

cli.showWelcomMsg();
const userName = cli.askUserName();
cli.showGreetingUser(userName);

runGame(3, userName, gameFunctions);
